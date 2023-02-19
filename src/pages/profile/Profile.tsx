import ProfileBanner from "../../components/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../../components/ArticleList";
import useArticles from "../../hooks/useArticles";
import Pagination from "../../components/Pagination";
import useProfile from "../../hooks/useProfile";
import Loading from "../../components/Loading";

const Profile = () => {
  const { username } = useParams();
  const [active, setActive] = useState<"0" | "1" | "2">("0");
  const [currentPage, setCurrentPage] = useState(1);
  const query = useMemo(
    () => [`?author=${username}&`, `?favorited=${username}&`],
    [username]
  );

  const { profile, isLoading, mutate } = useProfile(username!);

  const { articles } = useArticles({
    query: query[Number(active)],
    page: currentPage,
  });

  if (isLoading) {
    return <Loading minH={"50"} size="30" />;
  }

  return (
    <>
      <ProfileBanner profile={profile!} mutate={mutate} />
      <div className="screen-width">
        <div className="mt-6 w-[70%] mx-auto">
          <ProfileNav active={active} setActive={setActive} />
          <>
            <ArticleList
              query={query}
              active={active}
              currentPage={currentPage}
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
      </div>
    </>
  );
};

export default Profile;
