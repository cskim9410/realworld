import { useSWRConfig } from "swr";

const useAllMutate = () => {
  const { mutate } = useSWRConfig();
  return mutate(() => true, undefined, false);
};

export default useAllMutate;
