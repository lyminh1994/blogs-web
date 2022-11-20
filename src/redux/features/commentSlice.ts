import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';
import type { CommentState } from 'types/comment';

const initialState: CommentState = {
  comments: null,
};

const commentSlice = createSlice({ name: 'comment', initialState, reducers: {} });

export const selectComment = (state: RootState) => state.comment;

export default commentSlice.reducer;
