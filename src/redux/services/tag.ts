import { api } from './api';
import type { PagingResponse } from 'types/common';
import type { Tag } from 'types/app';

export const DEFAULT_PAGE_SIZE = 10;

export const limit = (pageSize: number, pageNumber: number) =>
  `page-size=${pageSize}&page-number=${pageNumber ? pageNumber * pageSize : 0}`;

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<PagingResponse<Tag>, number>({
      query: (pageNumber) => ({
        url: `/tags?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
      providesTags: (_result, _err, pageNumber) => [{ type: 'Tags', id: pageNumber }],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
