import axios, { AxiosError } from "axios";
import useSWR from "swr";
import type { MultipleArticle } from "../types/article";

const fetcher = async () => {
  try {
    const res = await axios.get("/articles");
    const articles = await res.data;
    return articles;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

const useArticles = () => {
  const {
    data: articles,
    error,
    isLoading,
  } = useSWR<MultipleArticle>("/api/articles", fetcher);
  return { articles, error, isLoading };
};

export default useArticles;
