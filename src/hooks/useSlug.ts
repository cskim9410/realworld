import { customGet } from "./../api/config";
import useSWR from "swr";
import { ResArticle } from "../types/article";

const fetcher = async (url: string) => {
  const data = await customGet<ResArticle>(url);
  return data;
};

const useSlug = (slug: string) => {
  const {
    data: article,
    error,
    mutate,
    isLoading,
  } = useSWR(`/api/articles/${slug}`, fetcher);

  return { article, mutate, isLoading, error };
};

export default useSlug;
