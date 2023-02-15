import { useRef } from "react";
import { postArticle } from "../../api/article";

const Editor = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    postArticle({
      article: {
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        body: bodyRef.current?.value,
      },
    });
  };

  return (
    <div className="screen-width mt-6">
      <form className="mx-[8.3333%]">
        <input
          ref={titleRef}
          type="text"
          className="input px-6 py-3 text-xl"
          placeholder="Article Title"
        />
        <input
          ref={descriptionRef}
          type="text"
          className="input px-3 py-2"
          placeholder="What's this article about"
        />
        <textarea
          ref={bodyRef}
          name=""
          id=""
          className="input px-3 py-2"
          cols={30}
          rows={10}
          placeholder="Write your article (in markdown)"
        ></textarea>
        <input
          ref={tagsRef}
          type="text"
          className="px-3 py-2 input"
          placeholder="Enter tags"
        />
        <button className="confirm-btn px-6 py-3 text-xl ml-auto block">
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default Editor;
