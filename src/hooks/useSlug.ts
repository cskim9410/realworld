import useSWR from "swr";
import { ResArticle } from "../types/article";
import { fetcher } from "../api/fetcher";

const useSlug = (slug: string) => {
  const {
    data: article,
    error,
    mutate,
    isLoading,
  } = useSWR(`/api/articles/${slug}`, fetcher<ResArticle>);

  return { article, mutate, isLoading, error };
};

export default useSlug;
