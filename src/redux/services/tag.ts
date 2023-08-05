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
      providesTags: () => ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
