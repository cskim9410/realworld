import { customDelete, customPost, customPut } from "./config";
import type { ResArticle } from "./../types/article";

export const postArticle = (body: {}) =>
  customPost<ResArticle>("/api/articles", body);

export const deleteArticle = (slug: string) =>
  customDelete(`/api/articles/${slug}`);

export const putArticle = (slug: string, body: {}) =>
  customPut<ResArticle>(`/api/articles/${slug}`, body);
