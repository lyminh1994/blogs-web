import { api } from './api';

import type { AuthResponse, SignUpParams, SignInParams } from 'types/app';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResponse, Required<SignUpParams>>({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<AuthResponse, Required<SignInParams>>({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({ url: 'sign-out', method: 'DELETE', credentials: 'include' }),
    }),
    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({ url: 'refresh-token', method: 'GET', credentials: 'include' }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useRefreshTokenMutation } =
  authApi;

export const {
  endpoints: { signUp, signIn, signOut, refreshToken },
} = authApi;
