import type { ResArticle } from "../types/article";
import { customDelete, customPost } from "./config";

export const addFavorite = (slug: string) =>
  customPost<ResArticle>(`/api/articles/${slug}/favorite`);

export const deleteFavorite = (slug: string) =>
  customDelete<ResArticle>(`/api/articles/${slug}/favorite`);
