import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth';
import { ArticleState } from 'types/article';
import { CommentState } from 'types/comment';
import { ProfileState } from 'types/profile';
import { TagState } from 'types/tag';

import authReducer from './auth/authSlice';
import articleReducer from './article/articleSlice';
import commentReducer from './comment/commentSlice';
import profileReducer from './profile/profileSlice';
import tagReducer from './tag/tagSlice';

interface RootState {
  auth: AuthState;
  article: ArticleState;
  comment: CommentState;
  profile: ProfileState;
  tag: TagState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  auth: authReducer,
  article: articleReducer,
  comment: commentReducer,
  profile: profileReducer,
  tag: tagReducer,
});

export default rootReducer;
