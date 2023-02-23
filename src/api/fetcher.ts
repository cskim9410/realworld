import { customGet } from "./config";

export const fetcher = async <T>(url: string) => {
  const data = await customGet<T>(url);
  return data;
};
