import useSWR from "swr";

const useTags = () => {
  const {
    data: tags,
    error,
    isLoading,
  } = useSWR<{ tags: string[] }>("/api/tags");
  return { tags, error, isLoading };
};
export default useTags;
