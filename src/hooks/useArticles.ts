import { useState } from "react";
import { useEffect, useMemo } from "react";
import useSWR from "swr";
import type { MultipleArticle } from "../types/article";
import { fetcher } from "../api/fetcher";

const useArticles = ({ query, page = 1 }: { query?: string; page: number }) => {
  const offset = useMemo(() => (page - 1) * 10, [page]);
  const [url, setUrl] = useState(
    `/api/articles${query}limit=10&offset=${offset}`
  );

  useEffect(() => {
    setUrl(`/api/articles${query}limit=10&offset=${offset}`);
  }, [query, offset]);

  const {
    data: articles,
    error,
    isLoading,
    mutate,
  } = useSWR(url, fetcher<MultipleArticle>, {
    suspense: true,
  });
  return { articles, error, isLoading, mutate };
};

export default useArticles;
