import http from 'utils/http';

interface Article {
  id: number;
  author: Author;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  favorite: boolean;
  favoritesCount: number;
  tagNames: string[];
}

interface CreateArticle {
  title: string;
  description: string;
  body: string;
  tagNames: string[];
}

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

interface Tag {
  id: number;
  name: string;
}

const limit = (count: number, page: number) =>
  `page-size=${count}&page-number=${page ? page * count : 0}`;

const omitSlug = (article: Article) => Object.assign({}, article, { slug: undefined });

export const getAll = async (page: number) => {
  return await http.get(`/articles?${limit(10, page)}`);
};

export const getByAuthor = async (author: Author, page: number) => {
  return await http.get(`/articles?author=${author.username}&${limit(10, page)}`);
};

export const getByTagName = async (tag: Tag, page: number) => {
  return await http.get(`/articles?tag=${tag.name}&${limit(10, page)}`);
};

export const removeBySlug = async (slug: string) => {
  return await http.delete(`/articles/${slug}`);
};

export const favoriteBySlug = async (slug: string) => {
  return await http.post(`/articles/favorite/${slug}`);
};

export const getByFavorite = async (username: string, page: number) => {
  return await http.get(`/articles?favorite-by=${username}&${limit(10, page)}`);
};

export const getFeeds = async (page: number) => {
  return await http.get(`/articles/feeds?${limit(10, page)}`);
};

export const getBySlug = async (slug: string) => {
  return await http.get(`/articles/${slug}`);
};

export const unfavoriteBySlug = async (slug: string) => {
  return await http.delete(`/articles/favorite/${slug}`);
};

export const update = async (article: Article) => {
  return await http.put(`/articles/${article.slug}`, {
    article: omitSlug(article),
  });
};

export const create = async (article: CreateArticle) => {
  return await http.post('/articles', { article });
};
