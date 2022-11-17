import { createAsyncThunk } from '@reduxjs/toolkit';

import http from 'utils/http';
import type { AuthResponse, SignInRequest, SignUpRequest } from 'types/auth';

export const signUp = createAsyncThunk<AuthResponse, SignUpRequest>(
  'auth/signUp',
  async (signUpParams) => {
    const response = await http.post('/auth/signUp', signUpParams);
    return response.data;
  },
);

export const signIn = createAsyncThunk<AuthResponse, SignInRequest>(
  'auth/signIn',
  async (signInParams, { rejectWithValue }) => {
    const response = await http.post('/auth/signIn', signInParams, { withCredentials: true });
    console.log(response);

    if (response.status < 200 || response.status >= 300) {
      rejectWithValue(response.data);
    }

    return response.data;
  },
);

export const refreshToken = createAsyncThunk<AuthResponse, void>('auth/refreshToken', async () => {
  const response = await http.get('/auth/refresh-token', { withCredentials: true });
  return response.data;
});

export const signOut = createAsyncThunk<void, void>('auth/signOut', async () => {
  return await http.delete('/auth/signOut', { withCredentials: true });
});
