import { useState, FormEvent, ChangeEvent, KeyboardEvent } from "react";
import { postArticle } from "../../api/article";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Body {
  title: string;
  description: string;
  body: string;
  tag: string;
  tagList: string[];
}

const Editor = () => {
  const navigate = useNavigate();
  const [articleBody, setArticleBody] = useState<Body>({
    title: "",
    description: "",
    body: "",
    tag: "",
    tagList: [],
  });

  const { title, description, body, tagList, tag } = articleBody;

  const changeBodyProp = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setArticleBody({
      ...articleBody,
      [event.target.name]: event.target.value,
    });
  };

  const removeTag = (tag: string) => {
    setArticleBody({
      ...articleBody,
      tagList: tagList.filter((t) => t !== tag),
    });
  };

  const addTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (tagList.find((t) => t === tag)) return;
      setArticleBody({
        ...articleBody,
        tag: "",
        tagList: [...tagList, tag],
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { article } = await postArticle({
      article: {
        title,
        description,
        body,
        tagList,
      },
    });
    navigate(`/`);
  };

  return (
    <div className="screen-width mt-6">
      <form className="mx-[8.3333%]" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={changeBodyProp}
          name="title"
          type="text"
          className="input px-6 py-3 text-xl"
          placeholder="Article Title"
        />
        <input
          value={description}
          onChange={changeBodyProp}
          name="description"
          type="text"
          className="input px-3 py-2"
          placeholder="What's this article about"
        />
        <textarea
          value={body}
          onChange={changeBodyProp}
          name="body"
          id=""
          className="input px-3 py-2"
          cols={30}
          rows={10}
          placeholder="Write your article (in markdown)"
        ></textarea>
        <input
          onKeyDown={addTag}
          value={tag}
          onChange={changeBodyProp}
          name="tag"
          type="text"
          className="px-3 py-2 input"
          placeholder="Enter tags"
        />
        <div>
          {tagList.map((t) => (
            <div
              className="text-white text-[0.8rem] py-[0.1rem] mr-1 mb-1 bg-[#818a91] rounded-[10rem] px-[0.6rem] inline-block"
              key={t}
            >
              <MdOutlineClose
                className="inline-block mr-1 text-lg cursor-pointer"
                onClick={() => removeTag(t)}
              />
              {` ${t} `}
            </div>
          ))}
        </div>
        <button className="confirm-btn px-6 py-3 text-xl ml-auto block">
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default Editor;
