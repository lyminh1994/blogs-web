import { api } from './api';

import type { CommentResponse, NewCommentRequest } from 'types/app';

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<Array<CommentResponse>, string>({
      query: (slug) => ({ url: `/articles/${slug}/comments`, method: 'GET' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Comments', id } as const)),
        { type: 'Comments' as const, id: 'LIST' },
      ],
    }),
    createComment: builder.mutation<CommentResponse, { slug: string; body: NewCommentRequest }>({
      query: ({ slug, body }) => ({ url: `/articles/${slug}/comments`, method: 'POST', body }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    removeComment: builder.mutation<CommentResponse, { slug: string; commentId: number }>({
      query: ({ slug, commentId }) => ({
        url: `/articles/${slug}/comments/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (comment) => [{ type: 'Comments', id: comment?.id }],
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation, useRemoveCommentMutation } =
  commentApi;
