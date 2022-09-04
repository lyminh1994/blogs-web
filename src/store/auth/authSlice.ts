import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { AuthResponse, AuthState, LoginRequest, RegisterRequest } from 'types/auth';
import { register, login, refreshToken, logout } from 'apis/authApi';

const initialState: AuthState = {
  accessToken: null,
  user: null,
  status: 'idle',
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (registerParams: RegisterRequest) => {
    const response = await register(registerParams);
    return response.data;
  },
);

export const authLogin = createAsyncThunk('auth/login', async (loginParams: LoginRequest) => {
  const response = await login(loginParams);
  return response.data;
});

export const authRefreshToken = createAsyncThunk('auth/refreshToken', async () => {
  const response = await refreshToken();
  return response.data;
});

export const authLogout = createAsyncThunk('auth/logout', async () => {
  return await logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    appLoaded: (state) => {
      const storage = localStorage.getItem('app_user');

      const { user, accessToken } = storage
        ? JSON.parse(storage)
        : { user: null, accessToken: null };

      state.user = user;
      state.accessToken = accessToken;
    },
  },
  extraReducers(builder) {
    builder.addCase(authRegister.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(authRegister.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'succeeded';

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      console.log(action);
    });

    builder.addCase(authLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'succeeded';

      const storage = JSON.stringify({
        user: user,
        accessToken: accessToken,
      });
      localStorage.setItem('app_user', storage);
    });

    builder.addCase(authRefreshToken.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'succeeded';

      const storage = JSON.stringify({
        user: user,
        accessToken: accessToken,
      });
      localStorage.removeItem('app_user');
      localStorage.setItem('app_user', storage);
    });

    builder.addCase(authLogout.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
      state.status = 'succeeded';

      localStorage.removeItem('app_user');
    });
  },
});

export const { appLoaded } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
