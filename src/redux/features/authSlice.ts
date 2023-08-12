import { createSlice } from '@reduxjs/toolkit';

import { login, logout, refreshToken, updatePassword, updateUser } from 'redux/services/api';

import type { RootState } from 'redux/store';
import type { UserResponse } from 'types/app';

const initialState: {
  user: UserResponse | null;
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  isAuthenticated: boolean;
} = {
  user: null,
  accessToken: null,
  tokenType: null,
  expiresIn: 0,
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.tokenType = payload.tokenType;
      state.expiresIn = payload.expiresIn;
      state.isAuthenticated = true;
    }),
      builder.addMatcher(logout.matchFulfilled, () => initialState),
      builder.addMatcher(refreshToken.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.tokenType = payload.tokenType;
        state.expiresIn = payload.expiresIn;
        state.isAuthenticated = true;
      }),
      builder.addMatcher(updateUser.matchFulfilled, (state, { payload }) => {
        state.user = payload;
      }),
      builder.addMatcher(updatePassword.matchFulfilled, () => initialState);
  },
});

export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth;
