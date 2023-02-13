import { CurrentUser } from "./../types/user";
import useSWR from "swr";
const useUser = () => {
  const { data, error, isLoading, mutate } = useSWR<{ user: CurrentUser }>(
    "/api/user"
  );
  const user = data?.user;
  if (error) return { user: undefined };

  return { user, isLoading, mutate };
};

export default useUser;
