import ArticleMeta from "./ArticleMeta";
import useSlug from "./../hooks/useSlug";
import { useParams } from "react-router-dom";
import ArticleAction from "./ArticleAction";

const SlugBanner = () => {
  const { slug } = useParams();
  const { article } = useSlug(slug!);

  return (
    <div className="bg-[#333] w-full text-white py-8 mb-8 shadow-banner">
      <div className="screen-width px-[15px]">
        <h1 className="text-[2.8rem] font-semibold drop-shadow-banner pb-2">
          {article?.article.title}
        </h1>
        <div className="flex mt-8">
          {article && (
            <ArticleMeta
              createdAt={article.article.createdAt}
              user={article.article.author}
              nameColor="[#fff]"
            />
          )}
          <ArticleAction />
        </div>
      </div>
    </div>
  );
};
export default SlugBanner;
