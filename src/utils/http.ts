import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

import store from 'store';
import { refreshToken } from 'apis/authApi';

import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

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
    if (error) {
      const { code, message, config, response } = error;
      if (code === 'ERR_NETWORK') {
        enqueueSnackbar(message, {
          autoHideDuration: 1000,
          variant: 'error',
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        });

        return Promise.reject(error);
      }

      if (config?.url !== '/auth/signIn' && response) {
        // Access Token was expired
        if (response.status === 401) {
          store.dispatch(refreshToken);
          const { status } = store.getState().auth;

          if (status === 'rejected') {
            return Promise.reject(response.data);
          }
        }
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
