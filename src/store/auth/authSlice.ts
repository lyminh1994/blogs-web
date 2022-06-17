import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { AuthState, LoginRequest, RegisterRequest } from 'types/auth';

const initialState: AuthState = {
  accessToken: null,
  user: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    appLoaded: (state) => {
      const storage = localStorage.getItem('app_user');

      const authStorage: AuthState = storage
        ? JSON.parse(storage)
        : { accessToken: null, user: null };
      state.accessToken = authStorage.accessToken;
      state.user = authStorage.user;
    },
    login: (state, action: PayloadAction<LoginRequest>) => {
      state.accessToken =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY0MjUwMzMxOH0.qapF9desbyRo5AMCJgGsJMov43ELhH_STKGQCTBx0hLELg4sXHCUn-RfCpoNyDNtcubW1HX95SW-OV39aAa-QA';
      state.user = {
        id: 1,
        username: action.payload.username,
        email: 'dworstall0@bloglines.com',
        bio: 'drive cross-media ROI',
        image: 'https://robohash.org/quasiquisquamsed.png?size=50x50&set=set1',
      };

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;

      localStorage.removeItem('app_user');
    },
    register: (state, action: PayloadAction<RegisterRequest>) => {
      state.accessToken =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY0MjUwMzMxOH0.qapF9desbyRo5AMCJgGsJMov43ELhH_STKGQCTBx0hLELg4sXHCUn-RfCpoNyDNtcubW1HX95SW-OV39aAa-QA';
      state.user = {
        id: 1,
        username: action.payload.username,
        email: 'dworstall0@bloglines.com',
        bio: 'drive cross-media ROI',
        image: 'https://robohash.org/quasiquisquamsed.png?size=50x50&set=set1',
      };

      const storage = JSON.stringify({
        accessToken: state.accessToken,
        user: state.user,
      });
      localStorage.setItem('app_user', storage);
    },
    refreshAccess: (state) => {
      state.accessToken =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY0MjUwMzMxOH0.qapF9desbyRo5AMCJgGsJMov43ELhH_STKGQCTBx0hLELg4sXHCUn-RfCpoNyDNtcubW1HX95SW-OV39aAa-QA';
      state.user = {
        id: 1,
        username: 'Jo',
        email: 'dworstall0@bloglines.com',
        bio: 'drive cross-media ROI',
        image: 'https://robohash.org/quasiquisquamsed.png?size=50x50&set=set1',
      };
    },
  },
});

export const { appLoaded, login, logout, register, refreshAccess } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
