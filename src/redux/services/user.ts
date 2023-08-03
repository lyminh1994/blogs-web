import { api } from './api';

import type { UserProfileResponse } from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfileResponse, string>({
      query: (username) => ({ url: `/profiles/${username}`, method: 'GET' }),
    }),
    followByUsername: builder.mutation<UserProfileResponse, string>({
      query: (username) => ({ url: `/profiles/${username}/follow`, method: 'POST' }),
    }),
    unFollowByUsername: builder.mutation<UserProfileResponse, string>({
      query: (username) => ({ url: `/profiles/${username}/follow`, method: 'DELETE' }),
    }),
  }),
});

export const { useGetProfileQuery, useFollowByUsernameMutation, useUnFollowByUsernameMutation } =
  userApi;
