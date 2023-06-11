import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from 'redux/services/api';
import { RootState } from 'redux/store';

const initialState: {
  accessToken: string | null;
  isAuthenticator: boolean;
} = {
  accessToken: null,
  isAuthenticator: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.isAuthenticator = true;
    }),
      builder.addMatcher(logout.matchFulfilled, (state) => {
        state.accessToken = null;
        state.isAuthenticator = false;
      });
  },
});

export const selectIsAuthenticator = (state: RootState) => state.auth.isAuthenticator;

export default authSlice.reducer;
