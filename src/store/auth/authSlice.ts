import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, refreshToken, signOut } from 'apis/authApi';

import type { RootState } from 'store';
import type { AuthState } from 'types/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    type: null,
    accessToken: null,
  } as AuthState,
  reducers: {
    setCredentials: (state) => {
      const storage = localStorage.getItem('app_user');

      const { user, accessToken } = storage
        ? JSON.parse(storage)
        : { user: null, accessToken: null };

      state.user = user;
      state.accessToken = accessToken;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'fulfilled';

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.status = 'rejected';
      console.log(action);
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'fulfilled';

      const storage = JSON.stringify({
        user: user,
        accessToken: accessToken,
      });
      localStorage.setItem('app_user', storage);
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'rejected';
      console.log(action);
    });

    builder.addCase(refreshToken.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'fulfilled';

      const storage = JSON.stringify({
        user: user,
        accessToken: accessToken,
      });
      localStorage.removeItem('app_user');
      localStorage.setItem('app_user', storage);
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
      state.status = 'fulfilled';

      localStorage.removeItem('app_user');
    });
  },
});

export const { setCredentials } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
