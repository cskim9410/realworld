import useArticles from "./../hooks/useArticles";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  query: string[];
  active: "0" | "1" | "2";
  currentPage: number;
  hidden?: boolean;
}

const ArticleList = ({
  query,
  active,
  currentPage,
  hidden,
}: ArticleListProps) => {
  const { articles, mutate } = useArticles({
    query: query[Number(active)],
    page: currentPage,
  });

  if (hidden) {
    return <></>;
  }

  return (
    <>
      {articles && (
        <>
          {articles.articles.map((article) => (
            <ArticleCard key={article.slug} article={article} mutate={mutate} />
          ))}
        </>
      )}
      {articles?.articlesCount === 0 && (
        <div className="border-t-[1px] border-[rgba(0, 0, 0, 0.1)] py-6 w-full">
          No articles are here... yet.
        </div>
      )}
    </>
  );
};
export default ArticleList;
