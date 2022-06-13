import http from 'utils/http';

interface Comment {
  id: number;
  body: string;
  createdAt: number;
  updatedAt: number;
  user: User;
}

interface User {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export const create = async (slug: string, comment: Comment) => {
  return await http.post(`/articles/${slug}/comments`, { comment });
};

export const remove = async (slug: string, commentId: number) => {
  return await http.delete(`/articles/${slug}/comments/${commentId}`);
};

export const forArticle = async (slug: string) => {
  return await http.get(`/articles/${slug}/comments`);
};
