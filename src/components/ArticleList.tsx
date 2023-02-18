import useArticles from "./../hooks/useArticles";
import ArticleCard from "./ArticleCard";
import useLoginStore from "./../store/loginStore";
import { useEffect } from "react";
import Loading from "./Loading";

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
  const { isLogin } = useLoginStore();
  const { articles, mutate, isLoading } = useArticles({
    query: query[Number(active)],
    page: currentPage,
  });

  useEffect(() => {
    mutate();
  }, [isLogin]);

  if (hidden) {
    return <></>;
  }

  if (isLoading) {
    return <Loading minH={"50"} size="12" />;
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
