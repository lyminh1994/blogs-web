import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import store from 'store';
import { authRefreshToken } from 'store/auth/authSlice';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { accessToken } = store.getState().auth;

    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError): Promise<AxiosError> => {
    const originalConfig = error.config;
    if (originalConfig.url !== '/auth/login' && error.response) {
      // Access Token was expired
      if (error.response.status === 401) {
        store.dispatch(authRefreshToken);
        const { status } = store.getState().auth;

        if (status === 'failed') {
          return Promise.reject(error.response.data);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
