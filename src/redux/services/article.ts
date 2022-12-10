import { api } from './api';
import { DEFAULT_PAGE_SIZE, limit } from './tag';

import type { NewArticle, UpdateArticle } from 'types/app';

export const articleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeeds: builder.query<void, number>({
      query: (pageNumber) => ({
        url: `/articles/feeds?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
    getArticles: builder.query<void, number>({
      query: (pageNumber) => ({
        url: `/articles?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
    getArticlesByTagName: builder.query<void, { tag: string; pageNumber: number }>({
      query: ({ tag, pageNumber }) => ({
        url: `/articles?tag=${tag}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
    getArticlesByFavorite: builder.query<void, { username: string; pageNumber: number }>({
      query: ({ username, pageNumber }) => ({
        url: `/articles?favorite-by=${username}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
    getArticlesByAuthor: builder.query<void, { author: string; pageNumber: number }>({
      query: ({ author, pageNumber }) => ({
        url: `/articles?author=${author}&${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
    getBySlug: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'GET' }),
    }),
    createArticle: builder.query<void, NewArticle>({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
    }),
    updateArticleBySlug: builder.query<void, { slug: string; body: UpdateArticle }>({
      query: ({ slug, body }) => ({ url: `/articles/${slug}`, method: 'PUT', body }),
    }),
    removeArticleBySlug: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'DELETE' }),
    }),
    favoriteBySlug: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/favorite/${slug}`, method: 'POST' }),
    }),
    unfavoriteBySlug: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetFeedsQuery,
  useGetArticlesQuery,
  useGetArticlesByTagNameQuery,
  useGetArticlesByFavoriteQuery,
  useGetArticlesByAuthorQuery,
  useGetBySlugQuery,
  useCreateArticleQuery,
  useUpdateArticleBySlugQuery,
  useRemoveArticleBySlugQuery,
  useFavoriteBySlugQuery,
  useUnfavoriteBySlugQuery,
} = articleApi;
