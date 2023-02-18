import useUser from "../hooks/useUser";
import type { FormEvent, ChangeEvent } from "react";
import { useRef, useState } from "react";
import { postComment } from "../api/comment";
import { useParams } from "react-router-dom";
import useComments from "../hooks/useComment";

const CommentForm = () => {
  const { user } = useUser();
  const { slug } = useParams();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useComments(slug!);
  const [disabled, setDisabled] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const changeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(event.target.value);
  };

  const postCommentReq = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true);
    if (commentRef.current?.value.trim().length === 0) return;
    const body = {
      comment: {
        body: commentBody,
      },
    };
    await postComment({ slug: slug!, body });
    mutate();
    setCommentBody("");
    setDisabled(false);
  };

  return (
    <div className="w-[70%] mx-auto border rounded mb-3">
      <form onSubmit={(event) => postCommentReq(event)}>
        <textarea
          value={commentBody}
          onChange={changeComment}
          rows={3}
          placeholder="Write a comment..."
          className="w-full p-5 text-base text-[#55595c] block focus:outline-none"
        ></textarea>
        <div className="border-t text-[0.8rem] font-light py-3 px-5 bg-[#f5f5f5] flex justify-between">
          <img
            src={user?.image}
            alt="user-img"
            className="w-7 h-7 rounded-full"
          />
          <button
            disabled={disabled}
            className="confirm-btn py-1 px-2 font-bold text-sm"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
