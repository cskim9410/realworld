import useSWR from "swr";
import type { MultipleArticle } from "../types/article";

const useArticles = ({ tag }: { tag?: string }) => {
  const {
    data: articles,
    error,
    isLoading,
  } = useSWR<MultipleArticle>(`/api/articles?${tag ? `tag=${tag}` : ""}`);
  return { articles, error, isLoading };
};

export default useArticles;
