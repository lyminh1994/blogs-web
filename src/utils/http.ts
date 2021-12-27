import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = "ac";
    if (token && config.headers) {
      console.log(config);

      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

export default instance;
