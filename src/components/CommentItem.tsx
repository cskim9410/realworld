import { Link, useParams } from "react-router-dom";
import { dayFormatter } from "../utils/dayFormatter";
import { IoTrashSharp } from "react-icons/io5";
import { Comment } from "../types/comment";
import useUser from "../hooks/useUser";
import { deleteComment } from "../api/comment";
import useComments from "../hooks/useComment";

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { slug } = useParams();
  const { user } = useUser();
  const { mutate } = useComments(slug!);

  const deleteCommentReq = async () => {
    await deleteComment(slug!, comment.id);
    mutate();
  };

  return (
    <div className="border rounded w-[70%] mx-auto mb-1">
      <div className="p-5">
        <p>{comment.body}</p>
      </div>
      <div className="border-t text-[0.8rem] font-light px-5 py-3 flex justify-between items-center bg-[#f5f5f5]">
        <div className="flex items-center">
          <Link
            to={`/profile/${comment.author.username}`}
            className="text-green hover:underline"
          >
            <img
              src={comment.author.image}
              alt="user-img"
              className="rounded-full w-5 h-5 inline-block"
            />
            {comment.author.username}
          </Link>
          <span className="ml-1 text-[#bbb]">
            {dayFormatter(comment.createdAt)}
          </span>
        </div>
        {comment.author.username === user?.user.username && (
          <button
            onClick={deleteCommentReq}
            className="hover:opacity-100 hover:cursor-pointer"
          >
            <IoTrashSharp className="opacity-60" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
