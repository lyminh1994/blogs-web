import http from 'utils/http';
import { NewArticleRequest, UpdateArticleRequest } from 'types/article';

const DEFAULT_PAGE_SIZE = 10;

const limit = (pageSize: number, pageNumber: number) =>
  `page-size=${pageSize}&page-number=${pageNumber ? pageNumber * pageSize : 0}`;

export const getFeeds = async (pageNumber: number) => {
  return await http.get(`/articles/feeds?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`);
};

export const getArticles = async (pageNumber: number) => {
  return await http.get(`/articles?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`);
};

export const getArticlesByTagName = async (tag: string, pageNumber: number) => {
  return await http.get(`/articles?tag=${tag}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`);
};

export const getArticlesByFavorite = async (username: string, pageNumber: number) => {
  return await http.get(
    `/articles?favorite-by=${username}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
  );
};

export const getArticlesByAuthor = async (author: string, pageNumber: number) => {
  return await http.get(`/articles?author=${author}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`);
};

export const getBySlug = async (slug: string) => {
  return await http.get(`/articles/${slug}`);
};

export const createArticle = async (article: NewArticleRequest) => {
  return await http.post('/articles', article);
};

export const updateArticleBySlug = async (article: UpdateArticleRequest) => {
  return await http.put(`/articles/${article.slug}`, article);
};

export const removeArticleBySlug = async (slug: string) => {
  return await http.delete(`/articles/${slug}`);
};

export const favoriteBySlug = async (slug: string) => {
  return await http.post(`/articles/favorite/${slug}`);
};

export const unfavoriteBySlug = async (slug: string) => {
  return await http.delete(`/articles/${slug}/favorite`);
};
