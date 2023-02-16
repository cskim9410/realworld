import useSWR from "swr";
import { resArticle } from "../types/article";
const useSlug = (slug: string) => {
  const { data: article } = useSWR<resArticle>(`/api/articles/${slug}`);

  return { article };
};

export default useSlug;
