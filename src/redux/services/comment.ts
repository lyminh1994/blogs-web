import { api } from './api';

import type { CommentResponse, CommentsResponse, CreateCommentRequest } from 'types/app';

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<CommentsResponse, { slug?: string; page: number; size: number }>({
      query: ({ slug, page, size }) => ({
        url: `/articles/${slug}/comments`,
        method: 'GET',
        params: { page, size },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.contents.map(({ id }) => ({ type: 'Comments' as const, id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    createComment: builder.mutation<CommentResponse, { slug?: string; body: CreateCommentRequest }>(
      {
        query: ({ slug, body }) => ({ url: `/articles/${slug}/comments`, method: 'POST', body }),
        invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
      },
    ),
    removeComment: builder.mutation<CommentResponse, { slug: string; id: string }>({
      query: ({ slug, id }) => ({
        url: `/articles/${slug}/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Comments', id }],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation, useRemoveCommentMutation } =
  commentApi;
