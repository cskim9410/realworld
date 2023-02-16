import type { resArticle } from "../types/article";
import { customDelete, customPost } from "./config";

export const addFavorite = (slug: string) =>
  customPost<resArticle>(`/api/articles/${slug}/favorite`);

export const deleteFavorite = (slug: string) =>
  customDelete<resArticle>(`/api/articles/${slug}/favorite`);
