import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    username: string;
    email: string;
    bio: string;
    image: string;
    enabled: boolean;
  } | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    appLoad: (state) => {
      const storage = localStorage.getItem('app_user');

      const authStorage: AuthState = storage
        ? JSON.parse(storage)
        : { accessToken: null, refreshToken: null, user: null };
      state.accessToken = authStorage.accessToken;
      state.refreshToken = authStorage.refreshToken;
      state.user = authStorage.user;
    },
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.accessToken =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY0MjUwMzMxOH0.qapF9desbyRo5AMCJgGsJMov43ELhH_STKGQCTBx0hLELg4sXHCUn-RfCpoNyDNtcubW1HX95SW-OV39aAa-QA';
      state.refreshToken = '2d3a5b36-0864-4a37-998d-55aa08103880';
      state.user = {
        username: 'Jo',
        email: 'dworstall0@bloglines.com',
        bio: 'drive cross-media ROI',
        image: 'https://robohash.org/quasiquisquamsed.png?size=50x50&set=set1',
        enabled: true,
      };

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;

      localStorage.removeItem('app_user');
    },
    register: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.user = null;

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    },
    refreshAccess: (state) => {
      state.accessToken =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY0MjUwMzMxOH0.qapF9desbyRo5AMCJgGsJMov43ELhH_STKGQCTBx0hLELg4sXHCUn-RfCpoNyDNtcubW1HX95SW-OV39aAa-QA';
      state.refreshToken = '2d3a5b36-0864-4a37-998d-55aa08103880';
      state.user = {
        username: 'Jo',
        email: 'dworstall0@bloglines.com',
        bio: 'drive cross-media ROI',
        image: 'https://robohash.org/quasiquisquamsed.png?size=50x50&set=set1',
        enabled: true,
      };
    },
  },
});

export const { appLoad, login, logout, register, refreshAccess } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
