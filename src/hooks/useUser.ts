import { CurrentUser } from "./../types/user";
import useSWR from "swr";
import useLoginStore from "../store/loginStore";
const useUser = () => {
  const { logoutAction } = useLoginStore();
  const { data, error, isLoading, mutate } = useSWR<{ user: CurrentUser }>(
    "/api/user"
  );
  const user = data?.user;
  if (error) {
    logoutAction();
    return { user: undefined };
  }

  return { user, isLoading, mutate };
};

export default useUser;
