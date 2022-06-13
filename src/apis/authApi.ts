import http from 'utils/http';
import { RegisterRequest, LoginRequest } from 'types/auth';

export const register = async (registerParams: RegisterRequest) => {
  return await http.post('/auth/register', registerParams);
};

export const login = async (loginParams: LoginRequest) => {
  return await http.post('/auth/login', loginParams);
};
