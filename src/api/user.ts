import { customPost, customPut } from "./config";
import { resUser } from "./../types/user";
export const putUser = (body: {}) => customPut<resUser>("/api/user", body);

export const loginUser = (body: {}) =>
  customPost<resUser>("/api/users/login", body);

export const registerUser = (body: {}) =>
  customPost<resUser>("/api/users", body);
