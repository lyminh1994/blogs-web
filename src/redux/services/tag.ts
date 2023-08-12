import { api } from './api';

import type { TagResponse } from 'types/app';

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagResponse, { page: number; size: number }>({
      query: (params) => ({
        url: '/tags',
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.contents.map(({ id }) => ({ type: 'Tags' as const, id })),
              { type: 'Tags', id: 'LIST' },
            ]
          : [{ type: 'Tags', id: 'LIST' }],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
