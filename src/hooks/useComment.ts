import useSWR from "swr";
import { resComments } from "../types/comment";

const useComments = (slug: string) => {
  const {
    data: comments,
    error,
    isLoading,
    mutate,
  } = useSWR<resComments>(`/api/articles/${slug}/comments`);
  return { comments, error, isLoading, mutate };
};

export default useComments;
