import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { UserState } from 'types/user';

const initialState: UserState = {
  user: null,
  profile: null,
  status: 'idle',
};

const profileSlice = createSlice({ name: 'profile', initialState, reducers: {} });

export const selectUser = (state: RootState) => state.user;

export default profileSlice.reducer;
