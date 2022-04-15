import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { store } from 'store';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { value } = store.getState().counter;

    if (value && config.headers) {
      config.headers['Authorization'] = `Bearer ${value}`;
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
    console.log(error);

    return Promise.reject(error);
  },
);

export default instance;
