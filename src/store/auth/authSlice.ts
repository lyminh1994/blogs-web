import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { Auth, LoginValues, RegisterValues } from 'types/auth';

import { login, register } from 'service/authAPI';

interface Error {
  message: string;
}

export interface AuthState {
  auth: Auth | null;
  status: 'idle' | 'loading' | 'failed';
  error?: Error;
}

const initialState: AuthState = {
  auth: null,
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<Auth>) => {
        window.localStorage.setItem('auth', JSON.stringify(action.payload));

        state.status = 'idle';
        state.auth = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        window.localStorage.setItem('auth', JSON.stringify(action.payload));

        state.status = 'idle';
        state.auth = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const loginAsync = createAsyncThunk<Auth, LoginValues, { rejectValue: Error }>(
  'auth/login',
  async (loginParams, thunkApi) => {
    const response = await login(loginParams);
    if (response.status === 401) {
      return thunkApi.rejectWithValue((await response.data) as Error);
    }
    return response.data;
  },
);

export const registerAsync = createAsyncThunk<Auth, RegisterValues, { rejectValue: Error }>(
  'auth/register',
  async (registerParams, thunkApi) => {
    const response = await register(registerParams);
    if (response.status !== 200) {
      return thunkApi.rejectWithValue((await response.data) as Error);
    }
    return response.data;
  },
);

export const { logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
