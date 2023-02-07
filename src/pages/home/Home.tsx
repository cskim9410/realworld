import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";
import PostCard from "../../components/PostCard";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const getArticles = async () => {
    const res = await axios.get("https://api.realworld.io/api/articles");
    const articles = await res.data;
    console.log(articles);
    return articles;
  };

  useEffect(() => {
    getArticles();
  }, []);

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
        <PostCard />
      </div>
    </>
  );
};
export default Home;
