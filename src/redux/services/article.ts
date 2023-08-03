import { api } from './api';
import type {
  Article,
  ArticleResponse,
  CreateArticleRequest,
  UpdateArticleRequest,
} from 'types/app';

export const articleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<
      ArticleResponse,
      { limit: number; offset: number; author?: string; tag?: string; favorited?: string }
    >({
      query: (params) => ({
        url: '/articles',
        method: 'GET',
        params,
      }),
    }),
    getFeed: builder.query<ArticleResponse, number>({
      query: (page) => ({
        url: '/articles/feed',
        method: 'GET',
        params: { limit: 10, offset: page },
      }),
    }),
    favoriteArticle: builder.mutation<void, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'POST' }),
    }),
    unfavoriteArticle: builder.mutation<void, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'DELETE' }),
    }),
    createArticle: builder.mutation<Article, CreateArticleRequest>({
      query: (body) => ({ url: '/articles', method: 'POST', body: { article: body } }),
    }),
    getArticle: builder.query<{ article: Article }, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'GET' }),
    }),
    updateArticle: builder.mutation<Article, UpdateArticleRequest>({
      query: (body) => ({
        url: `/articles/${body.slug}`,
        method: 'PUT',
        body: {
          article: {
            title: body.title,
            description: body.description,
            body: body.body,
            tagList: body.tagList,
          },
        },
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
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
  useCreateArticleMutation,
  useGetArticleQuery,
  useUpdateArticleMutation,
  useRemoveArticleMutation,
} = articleApi;
