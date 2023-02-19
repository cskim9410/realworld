import { customPost, customPut } from "./config";
import { ResUser } from "./../types/user";
export const putUser = (body: {}) => customPut<ResUser>("/api/user", body);

export const loginUser = (body: {}) =>
  customPost<ResUser>("/api/users/login", body);

export const registerUser = (body: {}) =>
  customPost<ResUser>("/api/users", body);
