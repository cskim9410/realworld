import { customDelete, customPost } from "./config";
export const postComment = ({
  slug,
  body,
}: {
  slug: string;
  body: { comment: { body: string } };
}) => customPost(`/api/articles/${slug}/comments`, body);

export const deleteComment = (slug: string, id: number) =>
  customDelete(`/api/articles/${slug}/comments/${id}`);
