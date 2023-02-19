import {
  useState,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { postArticle, putArticle } from "../../api/article";
import { useNavigate, useParams } from "react-router-dom";
import EditTag from "../../components/EditTag";
import { customGet } from "../../api/config";
import { ResArticle } from "../../types/article";

interface Body {
  title: string;
  description: string;
  body: string;
  tag: string;
  tagList: string[];
}

const Editor = () => {
  const { slug } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const [articleBody, setArticleBody] = useState<Body>({
    title: "",
    description: "",
    body: "",
    tag: "",
    tagList: [],
  });

  const { title, description, body, tagList, tag } = articleBody;

  useEffect(() => {
    async function init() {
      if (slug) {
        setIsEdit(true);
        const { article } = await customGet<ResArticle>(
          `/api/articles/${slug}`
        );
        setArticleBody({
          ...articleBody,
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        });
      }
    }
    init();
  }, [slug]);

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
    if (isEdit) {
      const { article } = await putArticle(slug!, {
        article: {
          title,
          description,
          body,
          tagList,
        },
      });
      return navigate(`/article/${article.slug}`);
    }
    const { article } = await postArticle({
      article: {
        title,
        description,
        body,
        tagList,
      },
    });
    navigate(`/article/${article.slug}`);
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
        <EditTag tagList={tagList} removeTag={removeTag} />
        <button className="confirm-btn px-6 py-3 text-xl ml-auto block">
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default Editor;
