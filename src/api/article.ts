import { customDelete, customPost, customPut } from "./config";
import type { resArticle } from "./../types/article";

export const postArticle = (body: {}) =>
  customPost<resArticle>("/api/articles", body);

export const deleteArticle = (slug: string) =>
  customDelete(`/api/articles/${slug}`);

export const putArticle = (slug: string, body: {}) =>
  customPut<resArticle>(`/api/articles/${slug}`, body);
