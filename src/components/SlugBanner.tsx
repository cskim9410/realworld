import ArticleMeta from "./ArticleMeta";
import useSlug from "./../hooks/useSlug";
import { useParams } from "react-router-dom";

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
          <button className="mr-1 border rounded border-[#ccc] text-[#ccc]  px-2 py-1 text-sm leading-[1.25] hover:bg-[#ccc] hover:text-white">
            Follow sdfasdf
          </button>
          <button className="border border-green text-green rounded px-2 py-1 text-sm leading-[1.25] hover:bg-green hover:text-white transition-all">
            Favorite Article (numveR)
          </button>
        </div>
      </div>
    </div>
  );
};
export default SlugBanner;
