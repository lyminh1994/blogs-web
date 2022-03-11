import http from 'utils/http';

import { LoginValues, RegisterValues } from 'types/auth';

export const register = async (registerParams: RegisterValues) => {
  return await http.post('/auth/register', registerParams);
};

export const login = async (loginParams: LoginValues) => {
  return await http.post('/auth/login', loginParams);
};

export const currentUser = async () => {
  return await http.get('/user');
};

export const updateUser = async (
  username: string,
  email: string,
  password: string,
  bio?: string,
  image?: string,
) => {
  return await http.put(`/user/${username}`, { email, password, bio, image });
};
