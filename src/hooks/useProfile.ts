import useSWR from "swr";
import type { ResProfile } from "../types/profile";
const useProfile = (username: string) => {
  const {
    data: profile,
    mutate,
    error,
    isLoading,
  } = useSWR<ResProfile>(`/api/profiles/${username}`);

  return { profile, mutate, error, isLoading };
};

export default useProfile;
