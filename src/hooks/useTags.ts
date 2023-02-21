import { customGet } from "./../api/config";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const data = await customGet<{ tags: string[] }>(url);
  return data;
};

const useTags = () => {
  const { data: tags, error, isLoading } = useSWR("/api/tags", fetcher);
  return { tags, error, isLoading };
};
export default useTags;
