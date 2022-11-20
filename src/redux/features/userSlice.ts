import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';
import type { UserState } from 'types/user';

const initialState: UserState = {
  user: null,
  profile: null,
};

const profileSlice = createSlice({ name: 'user', initialState, reducers: {} });

export const selectUser = (state: RootState) => state.user;

export default profileSlice.reducer;
