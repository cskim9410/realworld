import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import { useEffect } from "react";
import useArticles from "../../hooks/useArticles";

const Home = () => {
  const { articles, error, isLoading } = useArticles();

  return (
    <>
      <Banner />
      <div className="md:px-4 md:max-w-[75%]">
        {/* <div className="border-b-[1px] border-gray-200"> */}
        <ul>
          <li className="flex">
            <NavLink
              to=""
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
        {/* </div> */}
        {articles &&
          articles.articles.map((article) => <ArticleCard article={article} />)}
      </div>
    </>
  );
};
export default Home;
