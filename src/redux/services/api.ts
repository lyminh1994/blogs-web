import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query/react';
import type { RootState } from 'redux/store';
import type {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  UserResponse,
  UpdateUserRequest,
  UpdatePasswordRequest,
} from 'types/app';

const baseUrl = 'http://localhost:8080';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { tokenType, accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set('Authorization', `${tokenType || 'Bearer'} ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'blogsApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Articles', 'Comments', 'Tags', 'Profile'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterRequest>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<AuthResponse, Required<LoginRequest>>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    updateUser: builder.mutation<UserResponse, UpdateUserRequest>({
      query: (body) => ({ url: '/user', method: 'PUT', body }),
    }),
    updatePassword: builder.mutation<void, UpdatePasswordRequest>({
      query: (body) => ({ url: '/user/password', method: 'PUT', body }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = api;

export const {
  endpoints: { register, login, logout, refreshToken, updateUser, updatePassword },
} = api;
