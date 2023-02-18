import { customDelete, customPost } from "./config";

export const postFollow = (username: string) =>
  customPost(`/api/profiles/${username}/follow`);

export const deleteFollow = (username: string) =>
  customDelete(`/api/profiles/${username}/follow`);
