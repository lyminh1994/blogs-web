import { createSlice } from '@reduxjs/toolkit';
import { getCurrentAccount } from 'redux/services/account';

import type { RootState } from 'redux/store';
import type { Profile, AccountResponse } from 'types/app';

type AccountState = {
  currentAccount: AccountResponse | null;
  profile: Profile | null;
};

const initialState: AccountState = {
  currentAccount: null,
  profile: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(getCurrentAccount.matchFulfilled, (state, action) => {
      state.currentAccount = action.payload;
    });
  },
});

export const selectCurrentAccount = (state: RootState) => state.account.currentAccount;

export const selectAccount = (state: RootState) => state.account;

export default accountSlice.reducer;
