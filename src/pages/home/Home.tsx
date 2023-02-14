import Banner from "../../components/Banner";
import { useState, useRef, useEffect, useMemo } from "react";
import useArticles from "../../hooks/useArticles";
import PopularTags from "../../components/PopularTags";
import useLoginStore from "../../store/loginStore";
import Pagination from "../../components/Pagination";
import FeedNav from "../../components/FeedNav";
import ArticleList from "../../components/ArticleList";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tag, setTag] = useState("");
  const { isLogin } = useLoginStore();
  const [active, setActive] = useState<"0" | "1" | "2">(isLogin ? "0" : "1");
  const query = useMemo(() => ["/feed?", "?", `?tag=${tag}&`], [tag]);

  const { articles } = useArticles({
    query: query[Number(active)],
    page: currentPage,
  });

  return (
    <>
      <Banner />
      <div className=" screen-width flex">
        <div className="flex-[0_0_75%] md:px-4">
          <FeedNav active={active} setActive={setActive} tag={tag} />
          <>
            <ArticleList
              query={query}
              active={active}
              currentPage={currentPage}
            />
            <ArticleList
              query={query}
              active={active}
              currentPage={currentPage + 1}
              hidden={true}
            />
            {articles && (
              <Pagination
                articlesCount={articles.articlesCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        </div>
        <PopularTags setTag={setTag} setActive={setActive} />
      </div>
    </>
  );
};
export default Home;
