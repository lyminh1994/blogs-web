import { api } from './api';
import type { PagingResponse } from 'types/common';
import type { TagResponse } from 'types/app';

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<PagingResponse<TagResponse>, number>({
      query: () => ({
        url: 'tags',
        method: 'GET',
      }),
      providesTags: () => ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
