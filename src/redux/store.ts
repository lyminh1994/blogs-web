import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { api } from './services/api';
import article from './features/articleSlice';
import auth from './features/authSlice';
import comment from './features/commentSlice';
import tag from './features/tagSlice';
import user from './features/userSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  article,
  auth,
  comment,
  tag,
  user,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
