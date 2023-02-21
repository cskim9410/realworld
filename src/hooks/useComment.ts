import { customGet } from "./../api/config";
import useSWR from "swr";
import type { ResComments } from "../types/comment";

const fetcher = async (url: string) => {
  const data = await customGet<ResComments>(url);
  return data;
};

const useComments = (slug: string) => {
  const {
    data: comments,
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/articles/${slug}/comments`, fetcher);
  return { comments, error, isLoading, mutate };
};

export default useComments;
