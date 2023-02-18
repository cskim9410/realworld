import ArticleMeta from "../../components/ArticleMeta";
import SlugBanner from "../../components/SlugBanner";
import useSlug from "./../../hooks/useSlug";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ArticleAction from "../../components/ArticleAction";

const Slug = () => {
  const { slug } = useParams();
  const { article: resArticle, isLoading } = useSlug(slug!);
  const { article } = resArticle!;

  if (isLoading) {
    return <Loading minH={"80"} size="64" />;
  }

  return (
    <>
      <SlugBanner />
      <div className="screen-width">
        <div className="px-4">
          <p className="text-xl leading-7 mb-8">{article.body}</p>
          <ul>
            {article.tagList.map((t) => (
              <li className="tag-default border-[#ddd] text-[#aaa]">{t}</li>
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div className="mt-6 mb-12 flex justify-center items-center">
          <ArticleMeta
            user={article.author}
            createdAt={article.createdAt}
            nameColor="green"
          />
          <ArticleAction />
        </div>
      </div>
    </>
  );
};
export default Slug;
