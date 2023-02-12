import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import { useEffect, useState } from "react";
import useArticles from "../../hooks/useArticles";
import PopularTags from "../../components/PopularTags";

const Home = () => {
  const [tag, setTag] = useState("");
  const { articles, error, isLoading } = useArticles({ tag });

  return (
    <>
      <Banner />
      <div className=" screen-width flex">
        <div className="flex-[0_0_75%] md:px-4">
          <ul>
            <li className="flex">
              <NavLink
                to=""
                onClick={() => setTag("")}
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "text-green border-b-2 border-green"
                      : "text-[#aaa]"
                  }  py-2 px-4`;
                }}
              >
                Global Feed
              </NavLink>
            </li>
          </ul>
          {articles &&
            articles.articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
        <PopularTags setTag={setTag} />
      </div>
    </>
  );
};
export default Home;
