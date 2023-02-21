import { useNavigate, useParams } from "react-router-dom";
import useSlug from "../hooks/useSlug";
import useUser from "../hooks/useUser";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";

import { IoTrashSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";

import useLoginStore from "../store/loginStore";
import { deleteArticle } from "../api/article";
import { addFavorite, deleteFavorite } from "../api/favorite";
import { deleteFollow, postFollow } from "../api/profile";

const ArticleAction = () => {
  const { slug } = useParams();
  const { article, mutate: currentSlugMutate } = useSlug(slug!);
  const { mutate } = useSWRConfig();
  const { user } = useUser();
  const [isAuthor, setIsAuthor] = useState(false);
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (article?.article.author.username === user?.user.username) {
      setIsAuthor(true);
    }
  }, [user, article]);

  const clickEditBtn = () => {
    navigate(`/editor/${slug}`);
  };

  const clickdeleteBtn = async () => {
    await deleteArticle(slug!);
    mutate(() => true, undefined, false);
    navigate("/", { replace: true });
  };
  const clickFollowBtn = async () => {
    if (!isLogin) navigate("/login");
    setDisabled(true);
    article?.article.author.following
      ? await deleteFollow(article.article.author.username)
      : await postFollow(article?.article.author.username!);
    await currentSlugMutate();
    setDisabled(false);
  };

  const clickFavBtn = async () => {
    if (!isLogin) navigate("/login");
    setDisabled(true);
    article?.article.favorited
      ? await deleteFavorite(slug!)
      : await addFavorite(slug!);
    await currentSlugMutate();
    setDisabled(false);
  };

  return (
    <>
      {isAuthor ? (
        <>
          <button
            onClick={clickEditBtn}
            className="mr-1 border rounded border-[#ccc] text-[#ccc]  px-2 py-1 text-sm leading-[1.25] hover:bg-[#ccc] hover:text-white h-fit transition-all"
          >
            <div className="flex">
              <RiPencilFill className="inline mr-1" />
              Edit Article
            </div>
          </button>
          <button
            onClick={clickdeleteBtn}
            className="border text-danger border-danger text-daborder-danger rounded px-2 py-1 text-sm leading-[1.25] hover:bg-danger hover:text-white transition-all h-fit"
          >
            <div className="flex">
              <IoTrashSharp className="inline mr-1" />
              Delete Article
            </div>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={clickFollowBtn}
            disabled={disabled}
            className={`mr-1 border rounded px-2 py-1 text-sm leading-[1.25]  h-fit transition-all disabled:cursor-not-allowed ${
              article?.article.author.following
                ? "bg-white opacity-80 hover:bg-[#e6e6e6] hover:opacity-100 text-[#373a3c]"
                : "hover:bg-[#ccc] hover:text-white border-[#ccc] text-[#ccc]"
            }`}
          >
            <div className="flex">
              <BiPlus className="inline mr-1" />
              {`${article?.article.author.following ? "Unf" : "F"}ollow ${
                article?.article.author.username
              }`}
            </div>
          </button>
          <button
            onClick={clickFavBtn}
            disabled={disabled}
            className={`border border-green rounded px-2 py-1 text-sm leading-[1.25] hover:bg-green hover:text-white transition-all h-fit disabled:cursor-not-allowed ${
              article?.article.favorited
                ? "bg-green text-white opacity-80 hover:opacity-100"
                : "text-green"
            }`}
          >
            <div className="flex">
              <AiFillHeart className="inline mr-1" />
              {`${article?.article.favorited ? "Unf" : "F"}avorite Article (${
                article?.article.favoritesCount
              })`}
            </div>
          </button>
        </>
      )}
    </>
  );
};

export default ArticleAction;
