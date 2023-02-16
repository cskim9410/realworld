import { customPost } from "./config";
import type { resArticle } from "./../types/article";

export const postArticle = (body: {}) =>
  customPost<resArticle>("/api/articles", body);
