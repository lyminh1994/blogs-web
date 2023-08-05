import { api } from './api';
import type {
  ArticleResponse,
  ArticlesResponse,
  CreateArticleRequest,
  UpdateArticleRequest,
} from 'types/app';

export const articleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<
      ArticlesResponse,
      { author?: string; tag?: string; favoriteBy?: string; page: number; size: number }
    >({
      query: (params) => ({
        url: '/articles',
        method: 'GET',
        params,
      }),
    }),
    getFeed: builder.query<ArticlesResponse, { page: number; size: number }>({
      query: (params) => ({
        url: '/articles/feeds',
        method: 'GET',
        params,
      }),
    }),
    getArticle: builder.query<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'GET' }),
    }),
    favorite: builder.mutation<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'PUT' }),
    }),
    unfavorite: builder.mutation<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'DELETE' }),
    }),
    createArticle: builder.mutation<ArticleResponse, CreateArticleRequest>({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
    }),
    updateArticle: builder.mutation<ArticleResponse, { slug: string; body: UpdateArticleRequest }>({
      query: ({ slug, body }) => ({
        url: `/articles/${slug}`,
        method: 'PUT',
        body,
      }),
    }),
    removeArticle: builder.mutation<void, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetFeedQuery,
  useGetArticleQuery,
  useFavoriteMutation,
  useUnfavoriteMutation,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useRemoveArticleMutation,
} = articleApi;
