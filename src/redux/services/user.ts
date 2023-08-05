import { api } from './api';

import type {
  ProfileResponse,
  UpdatePasswordRequest,
  UpdateUserRequest,
  UserResponse,
} from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    currentUser: builder.query<UserResponse, void>({
      query: () => ({ url: '/user', method: 'GET' }),
    }),
    updateUser: builder.mutation<UserResponse, UpdateUserRequest>({
      query: (body) => ({ url: '/user', method: 'PUT', body }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordRequest>({
      query: (body) => ({ url: '/user/password', method: 'PUT', body }),
    }),
    getProfile: builder.query<ProfileResponse, string>({
      query: (username) => ({ url: `/user/${username}`, method: 'GET' }),
    }),
    follow: builder.mutation<ProfileResponse, string>({
      query: (username) => ({ url: `/user/${username}/following`, method: 'PUT' }),
    }),
    unFollow: builder.mutation<ProfileResponse, string>({
      query: (username) => ({ url: `/user/${username}/following`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useCurrentUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useFollowMutation,
  useUnFollowMutation,
} = userApi;
