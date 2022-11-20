import { retry } from '@reduxjs/toolkit/query/react';
import { api } from './api';

import type { AuthResponse, SignInRequest, SignUpRequest } from 'types/auth';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResponse, SignUpRequest>({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<AuthResponse, SignInRequest>({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on signin, and this breaks out of retrying. The next signin attempt will succeed.
          retry.fail({ fake: 'error' });
        },
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({ url: 'auth/signout', method: 'DELETE', credentials: 'include' }),
    }),
    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({ url: 'auth/refresh-token', method: 'GET', credentials: 'include' }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useRefreshTokenMutation } =
  authApi;

export const {
  endpoints: { signUp, signIn, signOut, refreshToken },
} = authApi;
