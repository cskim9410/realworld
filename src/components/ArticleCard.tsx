import type { Article, MultipleArticle } from "../types/article";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useLoginStore from "../store/loginStore";
import type { KeyedMutator } from "swr";
import { addFavorite, deleteFavorite } from "../api/favorite";
import { useState } from "react";
import ArticleMeta from "./ArticleMeta";

const ArticleCard = ({
  article,
  mutate,
}: {
  article: Article;
  mutate: KeyedMutator<MultipleArticle>;
}) => {
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const clickFavBtn = async () => {
    if (!isLogin) navigate("/login");
    setDisabled(true);
    if (article.favorited) {
      await deleteFavorite(article.slug);
      await mutate();
    }
    if (!article.favorited) {
      await addFavorite(article.slug);
      await mutate();
    }
    setDisabled(false);
  };

  return (
    <div className="border-t-[1px] border-[rgba(0, 0, 0, 0.1)] py-6 w-full">
      <div className="font-light mb-4 w-full flex items-start justify-between">
        <div>
          <ArticleMeta
            user={article.author}
            createdAt={article.createdAt}
            nameColor="green"
          />
        </div>
        <button
          className={`border relative right-0 font-medium py-1 px-2 rounded text-sm border-green disabled:cursor-not-allowed ${
            article.favorited
              ? "bg-green text-white hover:bg-darkGreen"
              : "hover:text-white text-green hover:bg-green"
          } ${disabled ? "bg-green opacity-60 text-white" : ""}`}
          disabled={disabled}
          onClick={clickFavBtn}
        >
          <AiFillHeart className="inline-block align-baseline" />{" "}
          <span>{article.favoritesCount}</span>
        </button>
      </div>
      <Link to={`/article/${article.slug}`}>
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
