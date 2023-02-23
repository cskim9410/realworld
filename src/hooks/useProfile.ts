import useSWR from "swr";
import type { ResProfile } from "../types/profile";
import { fetcher } from "../api/fetcher";

const useProfile = (username: string) => {
  const {
    data: profile,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/profiles/${username}`, fetcher<ResProfile>, {
    suspense: true,
  });

  return { profile, mutate, error, isLoading };
};

export default useProfile;
