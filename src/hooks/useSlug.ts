import useSWR from "swr";
import { resArticle } from "../types/article";
const useSlug = (slug: string) => {
  const {
    data: article,
    error,
    mutate,
    isLoading,
  } = useSWR<resArticle>(`/api/articles/${slug}`);

  return { article, mutate, isLoading, error };
};

export default useSlug;
