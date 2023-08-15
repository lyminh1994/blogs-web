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
      providesTags: (result) =>
        result
          ? [
              ...result.contents.map(({ slug }) => ({ type: 'Articles' as const, id: slug })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),
    getFeed: builder.query<ArticlesResponse, { page: number; size: number }>({
      query: (params) => ({
        url: '/articles/feeds',
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.contents.map(({ slug }) => ({ type: 'Articles' as const, id: slug })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),
    getArticle: builder.query<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}`, method: 'GET' }),
      providesTags: (result, error, slug) => [{ type: 'Articles', id: slug }],
    }),
    favorite: builder.mutation<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'PUT' }),
      invalidatesTags: (result, error, slug) => [
        { type: 'Articles', id: slug },
        { type: 'Articles', id: 'LIST' },
      ],
    }),
    unfavorite: builder.mutation<ArticleResponse, string>({
      query: (slug) => ({ url: `/articles/${slug}/favorite`, method: 'DELETE' }),
      invalidatesTags: (result, error, slug) => [
        { type: 'Articles', id: slug },
        { type: 'Articles', id: 'LIST' },
      ],
    }),
    createArticle: builder.mutation<ArticleResponse, CreateArticleRequest>({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),
    updateArticle: builder.mutation<ArticleResponse, { slug: string; body: UpdateArticleRequest }>({
      query: ({ slug, body }) => ({
        url: `/articles/${slug}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { slug }) => [{ type: 'Articles', id: slug }],
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
