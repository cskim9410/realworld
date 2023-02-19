import { Link } from "react-router-dom";
import type { Profile } from "../types/profile";
import { dayFormatter } from "./../utils/dayFormatter";

interface ArticleMetaProps {
  user: Profile;
  createdAt: string;
  nameColor: string;
}

const ArticleMeta = ({ user, createdAt, nameColor }: ArticleMetaProps) => {
  return (
    <>
      <Link to={`/profile/${user.username}`} className="inline-block">
        <img src={user.image} className="h-8 w-8 rounded-full" />
      </Link>
      <div className="ml-1 inline-block leading-4 align-super mr-6 text-left">
        <Link
          to={`/profile/${user.username}`}
          className={`font-medium hover:underline text-${nameColor}`}
        >
          {user.username}
        </Link>
        <span className="text-xs text-[#bbb] block">
          {dayFormatter(createdAt)}
        </span>
      </div>
    </>
  );
};
export default ArticleMeta;
