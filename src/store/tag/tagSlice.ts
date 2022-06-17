import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TagState } from 'types/tag';

const initialState: TagState = {
  tags: null,
  status: 'idle',
};

const tagSlice = createSlice({ name: 'tag', initialState, reducers: {} });

export const selectTag = (state: RootState) => state.tag;

export default tagSlice.reducer;
