import { api } from './api';

import type { ProfileResponse } from 'types/app';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileResponse, string>({
      query: (publicId) => ({ url: `/user/${publicId}`, method: 'GET' }),
      providesTags: (result) =>
        result ? [{ type: 'Profile', id: result.publicId }] : [{ type: 'Profile', id: 'PROFILE' }],
    }),
    follow: builder.mutation<ProfileResponse, string>({
      query: (publicId) => ({ url: `/user/${publicId}/following`, method: 'PUT' }),
      invalidatesTags: (result, error, publicId) => [
        { type: 'Profile', id: publicId },
        { type: 'Articles', id: 'LIST' },
      ],
    }),
    unFollow: builder.mutation<ProfileResponse, string>({
      query: (publicId) => ({ url: `/user/${publicId}/following`, method: 'DELETE' }),
      invalidatesTags: (result, error, publicId) => [
        { type: 'Profile', id: publicId },
        { type: 'Articles', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useFollowMutation,
  useUnFollowMutation,
} = userApi;
