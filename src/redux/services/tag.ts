import { api } from './api';

export const DEFAULT_PAGE_SIZE = 10;

export const limit = (pageSize: number, pageNumber: number) =>
  `page-size=${pageSize}&page-number=${pageNumber ? pageNumber * pageSize : 0}`;

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<void, number>({
      query: (pageNumber) => ({
        url: `/tags?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`,
        method: 'GET',
      }),
    }),
  }),
});
