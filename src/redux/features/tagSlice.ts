import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';
import type { TagState } from 'types/tag';

const initialState: TagState = {
  tags: null,
};

const tagSlice = createSlice({ name: 'tag', initialState, reducers: {} });

export const selectTag = (state: RootState) => state.tag;

export default tagSlice.reducer;
