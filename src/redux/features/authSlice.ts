import { createSlice } from '@reduxjs/toolkit';
import { login, register, save } from 'redux/services/api';
import { RootState } from 'redux/store';
import { UserResponse } from 'types/app';

const initialState: {
  user: UserResponse | null;
  accessToken: string | null;
  isAuthenticated: boolean;
} = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(register.matchFulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.user.token;
      state.isAuthenticated = true;
    }),
      builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.user.token;
        state.isAuthenticated = true;
      }),
      builder.addMatcher(save.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.user.token;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = slice.actions;

export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth;
