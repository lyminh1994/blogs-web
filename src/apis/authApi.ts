import http from 'utils/http';
import { LoginRequest, RegisterRequest } from 'types/auth';

export const register = async (registerParams: RegisterRequest) => {
  return await http.post('/auth/register', registerParams);
};

export const login = async (loginParams: LoginRequest) => {
  return await http.post('/auth/login', loginParams);
};

export const refreshToken = async () => {
  return await http.get('/auth/refresh-token', { withCredentials: true });
};

export const logout = async () => {
  return await http.delete('/auth/logout', { withCredentials: true });
};