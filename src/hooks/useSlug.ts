import useSWR from "swr";
import { ResArticle } from "../types/article";
const useSlug = (slug: string) => {
  const {
    data: article,
    error,
    mutate,
    isLoading,
  } = useSWR<ResArticle>(`/api/articles/${slug}`);

  return { article, mutate, isLoading, error };
};

export default useSlug;
