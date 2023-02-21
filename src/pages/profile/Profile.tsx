import ProfileBanner from "../../components/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import { useState, useMemo, Suspense } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../../components/ArticleList";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

const Profile = () => {
  const { username } = useParams();
  const [active, setActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const query = useMemo(
    () => [`?author=${username}&`, `?favorited=${username}&`],
    [username]
  );

  return (
    <>
      <Suspense fallback={<></>}>
        <ProfileBanner username={username!} />
      </Suspense>
      <div className="screen-width">
        <div className="mt-6 w-[70%] mx-auto">
          <ProfileNav active={active} setActive={setActive} />
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
        </div>
      </div>
    </>
  );
};

export default Profile;
