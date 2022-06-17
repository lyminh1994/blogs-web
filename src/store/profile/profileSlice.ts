import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ProfileState } from 'types/profile';

const initialState: ProfileState = {
  profile: null,
  status: 'idle',
};

const profileSlice = createSlice({ name: 'profile', initialState, reducers: {} });

export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
