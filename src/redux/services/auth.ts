import { retry } from '@reduxjs/toolkit/query/react';
import { api } from './api';

import type { AuthResponse, SignInRequest, SignUpRequest } from 'types/app';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResponse, Required<SignUpRequest>>({
      query: (body) => ({
        url: 'auth/sign-up',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<AuthResponse, Required<SignInRequest>>({
      query: (body) => ({
        url: 'auth/sign-in',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on sign-in, and this breaks out of retrying. The next sign-in attempt will succeed.
          retry.fail({ fake: 'error' });
        },
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({ url: 'auth/sign-out', method: 'DELETE', credentials: 'include' }),
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
