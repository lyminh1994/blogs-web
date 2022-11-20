import { api } from './api';

import type { NewCommentRequest } from 'types/comment';

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<void, string>({
      query: (slug) => ({ url: `/articles/${slug}/comments`, method: 'GET' }),
    }),
    createComment: builder.query<void, { slug: string; body: NewCommentRequest }>({
      query: ({ slug, body }) => ({ url: `/articles/${slug}/comments`, method: 'POST', body }),
    }),
    removeComment: builder.query<void, { slug: string; commentId: number }>({
      query: ({ slug, commentId }) => ({
        url: `/articles/${slug}/comments/${commentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentQuery, useRemoveCommentQuery } = commentApi;
