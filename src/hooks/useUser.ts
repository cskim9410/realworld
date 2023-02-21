import { customGet } from "./../api/config";
import type { ResUser } from "./../types/user";
import useSWR from "swr";

const fetcher = async () => {
  const data = await customGet<ResUser>("/api/user");
  return data;
};

const useUser = () => {
  const { data: user, error, isLoading, mutate } = useSWR("/api/user", fetcher);
  return { user, error, isLoading, mutate };
};

export default useUser;
