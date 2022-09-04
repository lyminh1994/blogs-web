import http from 'utils/http';
import { NewCommentRequest } from 'types/comment';

export const getComments = async (slug: string) => {
  return await http.get(`/articles/${slug}/comments`);
};

export const createComment = async (slug: string, comment: NewCommentRequest) => {
  return await http.post(`/articles/${slug}/comments`, comment);
};

export const removeComment = async (slug: string, commentId: number) => {
  return await http.delete(`/articles/${slug}/comments/${commentId}`);
};
