import { combineReducers, Reducer } from '@reduxjs/toolkit';

import authReducer, { AuthState } from './auth/authSlice';
import counterReducer, { CounterState } from './counter/counterSlice';

interface RootState {
  auth: AuthState;
  counter: CounterState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
