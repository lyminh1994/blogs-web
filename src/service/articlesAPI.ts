import http from 'utils/http';

const limit = (count: number, page: number) => `limit=${count}&offset=${page ? page * count : 0}`;

const omitSlug = (article: any) => Object.assign({}, article, { slug: undefined });

export const getAll = async (page: number) => {
  return await http.get(`/articles?${limit(10, page)}`);
};

export const getByAuthor = async (author: any, page: number) => {
  return await http.get(`/articles?author=${author.id}&${limit(5, page)}`);
};

export const getByTag = async (tag: any, page: number) => {
  return await http.get(`/articles?tag=${tag.id}&${limit(10, page)}`);
};

export const remove = async (slug: string) => {
  return await http.delete(`/articles/${slug}`);
};

export const favorite = async (slug: string) => {
  return await http.post(`/articles/${slug}/favorite`);
};

export const favoriteBy = async (author: any, page: number) => {
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

export const update = async (article: any) => {
  return await http.put(`/articles/${article.slug}`, {
    article: omitSlug(article),
  });
};

export const create = async (article: any) => {
  return await http.post('/articles', { article });
};
