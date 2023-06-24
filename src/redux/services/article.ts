import { api } from './api';
import type { CreateArticleRequest, UpdateArticleRequest } from 'types/app';

export const articleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeeds: builder.query<void, void>({
      query: () => ({
        url: `/articles/feeds`,
        method: 'GET',
      }),
    }),
    getArticles: builder.query<void, void>({
      query: () => ({
        url: `/articles`,
        method: 'GET',
      }),
    }),
    getBySlug: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'GET' }),
    }),
    createArticle: builder.query<void, CreateArticleRequest>({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
    }),
    updateArticleBySlug: builder.query<void, { slug: string; body: UpdateArticleRequest }>({
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
  useGetBySlugQuery,
  useCreateArticleQuery,
  useUpdateArticleBySlugQuery,
  useRemoveArticleBySlugQuery,
  useFavoriteBySlugQuery,
  useUnfavoriteBySlugQuery,
} = articleApi;
