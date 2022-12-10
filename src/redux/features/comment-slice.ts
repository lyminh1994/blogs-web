import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';
import type { CommentResponse } from 'types/app';

type CommentState = {
  comments: Array<CommentResponse> | null;
};

const initialState: CommentState = {
  comments: null,
};

const commentSlice = createSlice({ name: 'comment', initialState, reducers: {} });

export const selectComment = (state: RootState) => state.comment;

export default commentSlice.reducer;
