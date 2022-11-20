import { api } from './api';

import type { UpdateUserRequest } from 'types/user';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserInfo: builder.query<void, UpdateUserRequest>({
      query: (body) => ({ url: '/user', method: 'PUT', body, credentials: 'include' }),
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
  useUpdateUserInfoQuery,
  useGetProfileQuery,
  useFollowByUsernameQuery,
  useUnFollowByUsernameQuery,
} = userApi;
