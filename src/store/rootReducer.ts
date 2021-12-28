import { combineReducers, Reducer } from '@reduxjs/toolkit';

import counterReducer, { CounterState } from './counter/counterSlice';

interface RootState {
  counter: CounterState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  counter: counterReducer,
});

export default rootReducer;
