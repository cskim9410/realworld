import axios from "axios";

interface IcustomAxios {
  method: "get" | "post" | "put" | "delete";
  url: string;
  body?: {};
}

const customAxios = async ({ method, url, body }: IcustomAxios) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const config = {
    baseURL: "https://api.realworld.io",
    headers: {
      Authorization: !!jwtToken ? `Token ${jwtToken}` : "",
    },
  };
  try {
    const { data } =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "put" && (await axios.put(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const customGet = <T>(url: string): Promise<T> =>
  customAxios({ method: "get", url });
export const customPost = <T>(url: string, body?: {}): Promise<T> =>
  customAxios({ method: "post", url, body });
export const customPut = <T>(url: string, body?: {}): Promise<T> =>
  customAxios({ method: "put", url, body });
export const customDelete = <T>(url: string): Promise<T> =>
  customAxios({ method: "delete", url });
