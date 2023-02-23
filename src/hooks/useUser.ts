import type { ResUser } from "./../types/user";
import useSWR from "swr";
import { fetcher } from "../api/fetcher";

const useUser = () => {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/user", fetcher<ResUser>);
  return { user, error, isLoading, mutate };
};

export default useUser;
