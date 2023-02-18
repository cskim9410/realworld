import useSWR from "swr";
import { resArticle } from "../types/article";
const useSlug = (slug: string) => {
  const {
    data: article,
    mutate,
    isLoading,
  } = useSWR<resArticle>(`/api/articles/${slug}`);

  return { article, mutate, isLoading };
};

export default useSlug;
