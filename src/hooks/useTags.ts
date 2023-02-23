import useSWR from "swr";
import { fetcher } from "../api/fetcher";

const useTags = () => {
  const {
    data: tags,
    error,
    isLoading,
  } = useSWR("/api/tags", fetcher<{ tags: string[] }>);
  return { tags, error, isLoading };
};
export default useTags;
