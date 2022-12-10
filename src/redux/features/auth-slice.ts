import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from 'redux/services/auth';

import type { RootState } from 'redux/store';
import type { AccountResponse } from 'types/app';

type AuthState = {
  user: AccountResponse | null;
  type: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    type: null,
    accessToken: null,
    isAuthenticated: false,
  } as AuthState,
  reducers: {
    setCredentials: (state) => {
      const storage = localStorage.getItem('app_user');
      const { user, type, accessToken } = storage
        ? JSON.parse(storage)
        : { user: null, type: null, accessToken: null };

      state.user = user;
      state.type = type;
      state.accessToken = accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(signIn.matchFulfilled, (state, action) => {
      const storage = JSON.stringify(action.payload);
      localStorage.setItem('app_user', storage);

      state.user = action.payload.user;
      state.type = action.payload.type;
      state.accessToken = action.payload.accessToken;
    });

    builder
      .addMatcher(signOut.matchPending, () => {
        localStorage.removeItem('app_user');
      })
      .addMatcher(signOut.matchFulfilled, (state) => {
        state.user = null;
        state.type = null;
        state.accessToken = null;
      });
  },
});

export const { setCredentials } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
