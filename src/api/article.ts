import { customPost } from "./config";
export const postArticle = (body: {}) => customPost("/api/articles", body);
