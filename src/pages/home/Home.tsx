import MainBanner from "../../components/MainBanner";
import { useState, useMemo, Suspense } from "react";
import PopularTags from "../../components/PopularTags";
import useLoginStore from "../../store/loginStore";
import Pagination from "../../components/Pagination";
import FeedNav from "../../components/FeedNav";
import Loading from "../../components/Loading";
import ArticleList from "../../components/ArticleList";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tag, setTag] = useState("");
  const { isLogin } = useLoginStore();
  const [active, setActive] = useState(isLogin ? 0 : 1);
  const query = useMemo(() => ["/feed?", "?", `?tag=${tag}&`], [tag]);

  return (
    <>
      <MainBanner />
      <div className=" screen-width flex">
        <div className="flex-[0_0_75%] md:px-4">
          <FeedNav active={active} setActive={setActive} tag={tag} />
          <Suspense fallback={<Loading minH={"50"} size="30" />}>
            <ArticleList
              query={query}
              active={active}
              currentPage={currentPage}
            />
            <Pagination
              query={query}
              active={active}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Suspense>
          <Suspense fallback={<></>}>
            <ArticleList
              query={query}
              active={active}
              currentPage={currentPage + 1}
              hidden={true}
            />
          </Suspense>
        </div>
        <PopularTags setTag={setTag} setActive={setActive} />
      </div>
    </>
  );
};
export default Home;
