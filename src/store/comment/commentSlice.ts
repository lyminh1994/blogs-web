import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { CommentState } from 'types/comment';

const initialState: CommentState = {
  comments: null,
  status: 'idle',
};

const commentSlice = createSlice({ name: 'comment', initialState, reducers: {} });

export const selectComment = (state: RootState) => state.comment;

export default commentSlice.reducer;
