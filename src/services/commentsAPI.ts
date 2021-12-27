import http from "utils/http";
import { Comment } from "types/comment";

export const create = async (slug: string, comment: Comment) => {
  return await http.post(`/articles/${slug}/comments`, { comment });
};

export const del = async (slug: string, commentId: number) => {
  return await http.delete(`/articles/${slug}/comments/${commentId}`);
};

export const forArticle = async (slug: string) => {
  return await http.get(`/articles/${slug}/comments`);
};
