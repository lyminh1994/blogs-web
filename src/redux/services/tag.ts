import { api } from './api';
import type { PagingResponse } from 'types/common';
import type { TagResponse } from 'types/app';

export const DEFAULT_PAGE_SIZE = 10;

export const limit = (pageNumber: number, pageSize: number) =>
  `page=${pageNumber ? pageNumber * pageSize : 0}&size=${pageSize}`;

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<PagingResponse<TagResponse>, number>({
      query: (pageNumber) => ({
        url: `/tags?${limit(pageNumber, DEFAULT_PAGE_SIZE)}`,
        method: 'GET',
      }),
      providesTags: (_result, _err, pageNumber) => [{ type: 'Tags', id: pageNumber }],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
