import ArticleMeta from "../../components/ArticleMeta";
import SlugBanner from "../../components/SlugBanner";
import useSlug from "./../../hooks/useSlug";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ArticleAction from "../../components/ArticleAction";
import CommentForm from "../../components/CommentForm";
import useLoginStore from "../../store/loginStore";
import CommentItem from "../../components/CommentItem";
import useComments from "../../hooks/useComment";

const Slug = () => {
  const { slug } = useParams();
  const { article, isLoading } = useSlug(slug!);
  const { isLogin } = useLoginStore();
  const { comments } = useComments(slug!);

  if (isLoading) {
    return <Loading minH={"80"} size="64" />;
  }

  return (
    <>
      <SlugBanner />
      <div className="screen-width">
        <div className="px-4">
          <p className="text-xl leading-7 mb-8">{article?.article.body}</p>
          <ul>
            {article?.article.tagList.map((t) => (
              <li key={t} className="tag-default border-[#ddd] text-[#aaa]">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="mt-6 mb-12 flex justify-center items-center">
          <ArticleMeta
            user={article?.article.author!}
            createdAt={article?.article.createdAt!}
            nameColor="green"
          />
          <ArticleAction />
        </div>
        {isLogin && <CommentForm />}
        {comments?.comments.map((c) => (
          <CommentItem comment={c} />
        ))}
      </div>
    </>
  );
};
export default Slug;
