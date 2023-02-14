import useSWR from "swr";
import type { MultipleArticle } from "../types/article";

const useArticles = ({ query, page = 1 }: { query?: string; page: number }) => {
  const offset = (page - 1) * 10;
  const {
    data: articles,
    error,
    isLoading,
  } = useSWR<MultipleArticle>(`/api/articles${query}limit=10&offset=${offset}`);
  return { articles, error, isLoading };
};

export default useArticles;
