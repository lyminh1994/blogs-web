import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ArticleState } from 'types/article';

const initialState: ArticleState = {
  articles: null,
  status: 'idle',
};
const articleSlice = createSlice({ name: 'article', initialState, reducers: {} });

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
