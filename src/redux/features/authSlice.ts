import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken } from 'redux/services/api';
import { RootState } from 'redux/store';

const initialState: {
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  isAuthenticated: boolean;
} = {
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
      state.accessToken = payload.accessToken;
      state.tokenType = payload.tokenType;
      state.expiresIn = payload.expiresIn;
      state.isAuthenticated = true;
    }),
      builder.addMatcher(logout.matchFulfilled, () => initialState),
      builder.addMatcher(refreshToken.matchFulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.tokenType = payload.tokenType;
        state.expiresIn = payload.expiresIn;
        state.isAuthenticated = true;
      });
  },
});

export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth;
