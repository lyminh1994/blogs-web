import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface CommonState {
  appLoaded?: boolean;
  appName?: string;
}

const initialState: CommonState = {
  appLoaded: false,
  appName: 'Blogs',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    appLoad: (state) => {
      state.appLoaded = true;
    },
  },
});

export const { appLoad } = commonSlice.actions;

export const commonSelector = (state: RootState) => state.common;

export default commonSlice.reducer;
