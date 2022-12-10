import { api } from './api';

import type { UpdateAccountPassword, UpdateAccountRequest } from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation<void, UpdateAccountRequest>({
      query: (body) => ({ url: '/user', method: 'PUT', body, credentials: 'include' }),
    }),
    updatePassword: builder.mutation<void, UpdateAccountPassword>({
      query: (body) => ({ url: '/password', method: 'PUT', body }),
    }),
    getProfile: builder.query<void, string>({
      query: (username) => ({ url: `/user/${username}`, method: 'GET' }),
    }),
    followByUsername: builder.query<void, string>({
      query: (username) => ({ url: `/user/${username}/following`, method: 'POST' }),
    }),
    unFollowByUsername: builder.query<void, string>({
      query: (username) => ({ url: `/user/${username}/following`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useFollowByUsernameQuery,
  useUnFollowByUsernameQuery,
} = userApi;
