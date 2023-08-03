import { TagResponse } from 'types/app';
import { api } from './api';

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagResponse, void>({
      query: () => ({
        url: '/tags',
        method: 'GET',
      }),
      providesTags: () => ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
