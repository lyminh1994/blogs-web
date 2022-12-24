import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  retry,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import type { RootState } from 'redux/store';
import type { AuthResponse, SignInRequest, SignUpRequest } from 'types/app';

const baseUrl = ` ${process.env.REACT_APP_BASE_URL}`;

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { type, accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set('Authorization', `${type} ${accessToken}`);
    }

    return headers;
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

const baseQueryWithRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQueryWithRetry(args, api, extraOptions);
  console.log(result);

  return result;
};

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
  baseQuery: baseQueryWithRefresh,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Articles', 'Comments', 'Tags', 'Account'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
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
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({ url: 'auth/sign-out', method: 'DELETE', credentials: 'include' }),
      // extraOptions: {
      //   backoff: () => {
      //     // We intentionally error once on sign-in, and this breaks out of retrying. The next sign-in attempt will succeed.
      //     retry.fail({ fake: 'error' });
      //   },
      // },
    }),
    refreshToken: builder.mutation<AuthResponse, void>({
      query: () => ({ url: 'auth/refresh-token', method: 'GET', credentials: 'include' }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useRefreshTokenMutation } =
  api;

export const {
  endpoints: { signUp, signIn, signOut, refreshToken },
} = api;
