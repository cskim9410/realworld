import { Article } from "../types/article";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="border-t-[1px] border-[rgba(0, 0, 0, 0.1)] py-6 w-full">
      <div className="font-light mb-4 w-full flex items-start justify-between">
        <div>
          <a href={""} className="inline-block">
            <img
              src={article.author.image}
              alt="df"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <div className="ml-1 inline-block leading-4 align-super">
            <a href="" className="font-medium text-green ">
              {article.author.username}
            </a>
            <span className="text-xs text-[#bbb] block">
              {article.createdAt}
            </span>
          </div>
        </div>
        <button
          className={`border relative right-0 font-medium py-1 px-2 rounded text-sm border-green ${
            article.favorited
              ? "bg-green text-white hover:bg-darkGreen"
              : "hover:text-white text-green hover:bg-green"
          }`}
        >
          <AiFillHeart className="inline-block align-baseline" />{" "}
          <span>{article.favoritesCount}</span>
        </button>
      </div>
      <Link to={`/#/article/${article.slug}`}>
        <h2 className="text-2xl font-semibold mb-1 leading-[1.1]">
          {article.title}
        </h2>
        <p className="text-[#999] mb-4 text-base leading-5 font-light">
          {article.description}
        </p>
        <div className="flex justify-between">
          <span className="text-[#bbb] max-w-[30%] align-middle text-xs font-light">
            Read more...
          </span>
          <ul className="max-w-[50%] align-top">
            {article.tagList.map((tag) => (
              <li
                key={tag}
                className="font-light text-xs border border-[#ddd] text-[#aaa] inline-block px-2 rounded-[10rem] mr-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};
export default ArticleCard;
