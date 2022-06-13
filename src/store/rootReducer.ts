import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth';

import authReducer from './auth/authSlice';
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
