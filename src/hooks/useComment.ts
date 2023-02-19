import useSWR from "swr";
import { ResComments } from "../types/comment";

const useComments = (slug: string) => {
  const {
    data: comments,
    error,
    isLoading,
    mutate,
  } = useSWR<ResComments>(`/api/articles/${slug}/comments`);
  return { comments, error, isLoading, mutate };
};

export default useComments;
