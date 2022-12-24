import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from 'redux/services/api';

import type { RootState } from 'redux/store';

type AuthState = {
  type: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  type: null,
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state) => {
      const storage = localStorage.getItem('app_user');
      const { type, accessToken } = storage
        ? JSON.parse(storage)
        : { type: null, accessToken: null };

      state.type = type;
      state.accessToken = accessToken;
      state.isAuthenticated = accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(signIn.matchFulfilled, (state, action) => {
      const storage = JSON.stringify(action.payload);
      localStorage.setItem('app_user', storage);

      state.type = action.payload.type;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    });

    builder.addMatcher(signOut.matchFulfilled, (state) => {
      state.type = null;
      state.accessToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem('app_user');
    });
  },
});

export const { setCredentials } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
