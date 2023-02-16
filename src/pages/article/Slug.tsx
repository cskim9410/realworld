import ArticleMeta from "../../components/ArticleMeta";
import SlugBanner from "../../components/SlugBanner";
import useSlug from "./../../hooks/useSlug";
import { useParams } from "react-router-dom";

const Slug = () => {
  const { slug } = useParams();
  const { article } = useSlug(slug!);

  return (
    <>
      <SlugBanner />
      <div className="screen-width">
        <div className="px-4">
          <p className="text-xl leading-7 mb-8">
            asdfajsldfklasdjfklaskldfjlkasdfjaskdfjalsdjfjasdkfjlsadj
          </p>
          <ul>
            <li className="tag-default border-[#ddd] text-[#aaa]">sdfas</li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="mt-6 mb-12">
          {article && (
            <div className="text-center">
              <ArticleMeta
                user={article.article.author}
                createdAt={article.article.createdAt}
                nameColor="green"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Slug;
