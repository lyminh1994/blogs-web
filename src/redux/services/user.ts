import { api } from './api';

import type { UserResponse, UpdatePasswordRequest, UpdateUserRequest } from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserResponse, void>({
      query: () => ({ url: 'user', method: 'GET' }),
      providesTags: (_result, _err, user) => [{ type: 'User', user }],
    }),
    updateUserInfo: builder.mutation<UserResponse, Partial<UpdateUserRequest>>({
      query: (body) => ({ url: 'user', method: 'PUT', body }),
      invalidatesTags: (user) => [{ type: 'User', user }],
    }),
    updatePassword: builder.mutation<void, Partial<UpdatePasswordRequest>>({
      query: (body) => ({ url: 'user/password', method: 'PUT', body }),
    }),
    getProfile: builder.query<void, string>({
      query: (username) => ({ url: `user/${username}`, method: 'GET' }),
    }),
    followByUsername: builder.query<void, string>({
      query: (username) => ({ url: `user/${username}/following`, method: 'POST' }),
    }),
    unFollowByUsername: builder.query<void, string>({
      query: (username) => ({ url: `user/${username}/following`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useFollowByUsernameQuery,
  useUnFollowByUsernameQuery,
} = userApi;
