import { api } from './api';

import type { AccountResponse, UpdateAccountPassword, UpdateAccountRequest } from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentAccount: builder.query<AccountResponse, void>({
      query: () => ({ url: '/user', method: 'GET' }),
    }),
    updateUserInfo: builder.mutation<void, UpdateAccountRequest>({
      query: (body) => ({ url: '/user', method: 'PUT', body }),
    }),
    updatePassword: builder.mutation<void, UpdateAccountPassword>({
      query: (body) => ({ url: '/user/password', method: 'PUT', body }),
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
  useGetCurrentAccountQuery,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useFollowByUsernameQuery,
  useUnFollowByUsernameQuery,
} = userApi;

export const {
  endpoints: { getCurrentAccount },
} = userApi;