import http from 'utils/http';

export const create = async (slug: string, comment: any) => {
  return await http.post(`/articles/${slug}/comments`, { comment });
};

export const remove = async (slug: string, commentId: number) => {
  return await http.delete(`/articles/${slug}/comments/${commentId}`);
};

export const forArticle = async (slug: string) => {
  return await http.get(`/articles/${slug}/comments`);
};
