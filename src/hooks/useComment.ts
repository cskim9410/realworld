import useSWR from "swr";
import type { ResComments } from "../types/comment";
import { fetcher } from "../api/fetcher";

const useComments = (slug: string) => {
  const {
    data: comments,
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/articles/${slug}/comments`, fetcher<ResComments>);
  return { comments, error, isLoading, mutate };
};

export default useComments;
