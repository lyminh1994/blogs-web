import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'redux/store';
import type { ArticleResponse } from 'types/app';

type ArticleState = {
  articles: Array<ArticleResponse> | null;
};

const initialState: ArticleState = {
  articles: null,
};

const articleSlice = createSlice({ name: 'article', initialState, reducers: {} });

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
