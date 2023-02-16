import type { Profile } from "../types/profile";
import { dayFormatter } from "./../utils/dayFormatter";

interface ArticleMetaProps {
  user: Profile;
  createdAt: string;
  nameColor: string;
}

const ArticleMeta = ({ user, createdAt, nameColor }: ArticleMetaProps) => {
  return (
    <div className="flex">
      <a href={""} className="inline-block">
        <img src={user.image} className="h-8 w-8 rounded-full" />
      </a>
      <div className="ml-1 inline-block leading-4 align-super mr-6">
        <a href="" className={`font-medium hover:underline text-${nameColor}`}>
          {user.username}
        </a>
        <span className="text-xs text-[#bbb] block">
          {dayFormatter(createdAt)}
        </span>
      </div>
    </div>
  );
};
export default ArticleMeta;
