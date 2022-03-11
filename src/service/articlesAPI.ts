import http from 'utils/http';
import { Article } from 'types/article';
import { User } from 'types/user';
import { Tag } from 'types/tag';

const limit = (count: number, page: number) => `limit=${count}&offset=${page ? page * count : 0}`;

const omitSlug = (article: Article) => Object.assign({}, article, { slug: undefined });

export const getAll = async (page: number) => {
  return await http.get(`/articles?${limit(10, page)}`);
};

export const getByAuthor = async (author: User, page: number) => {
  return await http.get(`/articles?author=${author.id}&${limit(5, page)}`);
};

export const getByTag = async (tag: Tag, page: number) => {
  return await http.get(`/articles?tag=${tag.id}&${limit(10, page)}`);
};

export const remove = async (slug: string) => {
  return await http.delete(`/articles/${slug}`);
};

export const favorite = async (slug: string) => {
  return await http.post(`/articles/${slug}/favorite`);
};

export const favoriteBy = async (author: User, page: number) => {
  return await http.get(`/articles?favorite=${author.id}&${limit(5, page)}`);
};

export const feed = async () => {
  return await http.get('/articles/feed?limit=10&offset=0');
};

export const get = async (slug: string) => {
  return await http.get(`/articles/${slug}`);
};

export const unfavorite = async (slug: string) => {
  return await http.delete(`/articles/${slug}/favorite`);
};

export const update = async (article: Article) => {
  return await http.put(`/articles/${article.slug}`, {
    article: omitSlug(article),
  });
};

export const create = async (article: Article) => {
  return await http.post('/articles', { article });
};
