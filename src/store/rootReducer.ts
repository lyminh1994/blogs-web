import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth';
import { ArticleState } from 'types/article';
import { CommentState } from 'types/comment';
import { TagState } from 'types/tag';
import { UserState } from 'types/user';

import authReducer from './auth/authSlice';
import articleReducer from './article/articleSlice';
import commentReducer from './comment/commentSlice';
import tagReducer from './tag/tagSlice';
import userReducer from './user/userSlice';

interface RootState {
  auth: AuthState;
  article: ArticleState;
  comment: CommentState;
  tag: TagState;
  user: UserState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  auth: authReducer,
  article: articleReducer,
  comment: commentReducer,
  tag: tagReducer,
  user: userReducer,
});

export default rootReducer;
