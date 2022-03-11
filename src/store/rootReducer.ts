import { combineReducers, Reducer } from '@reduxjs/toolkit';

import authReducer, { AuthState } from './auth/authSlice';
import commonReducer, { CommonState } from './common/commonSlice';
import counterReducer, { CounterState } from './counter/counterSlice';
import tagsReducer, { TagsState } from './tags/tagsSlice';

interface RootState {
  auth: AuthState;
  common: CommonState;
  counter: CounterState;
  tags: TagsState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  auth: authReducer,
  common: commonReducer,
  counter: counterReducer,
  tags: tagsReducer,
});

export default rootReducer;
