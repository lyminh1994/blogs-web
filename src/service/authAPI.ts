import http from 'utils/http';

export const register = async (registerParams: any) => {
  return await http.post('/auth/register', registerParams);
};

export const login = async (loginParams: any) => {
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
