import useArticles from "./../hooks/useArticles";
import ArticleCard from "./ArticleCard";
import useLoginStore from "./../store/loginStore";
import { useEffect } from "react";

interface ArticleListProps {
  query: string[];
  active: number;
  currentPage: number;
  hidden?: boolean;
}

const ArticleList = ({
  query,
  active,
  currentPage,
  hidden,
}: ArticleListProps) => {
  const { isLogin } = useLoginStore();
  const { articles, mutate } = useArticles({
    query: query[active],
    page: currentPage,
  });

  useEffect(() => {
    mutate();
  }, [isLogin]);

  if (hidden) {
    return <></>;
  }

  return (
    <>
      {articles.articles.map((article) => (
        <ArticleCard key={article.slug} article={article} mutate={mutate} />
      ))}
      {articles?.articlesCount === 0 && (
        <div className="border-t-[1px] border-[rgba(0, 0, 0, 0.1)] py-6 w-full">
          No articles are here... yet.
        </div>
      )}
    </>
  );
};
export default ArticleList;
