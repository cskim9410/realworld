import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import { useState } from "react";
import useArticles from "../../hooks/useArticles";
import PopularTags from "../../components/PopularTags";
import useLoginStore from "../../store/loginStore";

const Home = () => {
  const [tag, setTag] = useState("");
  const { articles } = useArticles({ tag });
  const { isLogin } = useLoginStore();
  // const [query, ]

  return (
    <>
      <Banner />
      <div className=" screen-width flex">
        <div className="flex-[0_0_75%] md:px-4">
          <ul className="flex">
            {isLogin && (
              <li className="flex">
                <NavLink
                  to="/"
                  // onClick={() => setTag("")}
                  className={({ isActive }) => {
                    return `${
                      isActive
                        ? "text-green border-b-2 border-green"
                        : "text-[#aaa]"
                    }  py-2 px-4`;
                  }}
                >
                  Your Feed
                </NavLink>
              </li>
            )}
            <li className="flex">
              <NavLink
                to="/"
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
