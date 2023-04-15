import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from 'redux/services/api';
import { RootState } from 'redux/store';

const initialState: {
  type: string | null;
  accessToken: string | null;
  isAuthenticator: boolean;
} = {
  type: null,
  accessToken: null,
  isAuthenticator: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(signIn.matchFulfilled, (state, { payload }) => {
      state.type = payload.type;
      state.accessToken = payload.accessToken;
      state.isAuthenticator = true;
    }),
      builder.addMatcher(signOut.matchFulfilled, (state) => {
        state.type = null;
        state.accessToken = null;
        state.isAuthenticator = false;
      });
  },
});

export const selectIsAuthenticator = (state: RootState) => state.auth.isAuthenticator;

export default authSlice.reducer;
