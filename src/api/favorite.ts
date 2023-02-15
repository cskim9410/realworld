import { customDelete, customPost } from "./config";

export const addFavorite = (slug: string) =>
  customPost(`/api/articles/${slug}/favorite`);

export const deleteFavorite = (slug: string) =>
  customDelete(`/api/articles/${slug}/favorite`);
