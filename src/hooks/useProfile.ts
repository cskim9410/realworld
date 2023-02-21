import { customGet } from "./../api/config";
import useSWR from "swr";
import type { ResProfile } from "../types/profile";

const fetcher = async (url: string) => {
  const data = await customGet<ResProfile>(url);
  return data;
};

const useProfile = (username: string) => {
  const {
    data: profile,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/profiles/${username}`, fetcher, {
    suspense: true,
  });

  return { profile, mutate, error, isLoading };
};

export default useProfile;
