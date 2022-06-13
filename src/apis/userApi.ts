import http from 'utils/http';

export const current = async () => {
  return await http.get('/user');
};

export const update = async (
  username: string,
  email: string,
  password: string,
  bio?: string,
  image?: string,
) => {
  return await http.put(`/user/${username}`, { email, password, bio, image });
};

export const get = async (username: string) => await http.get(`/user/${username}`);

export const follow = async (username: string) => await http.post(`/user/following/${username}`);

export const unFollow = async (username: string) =>
  await http.delete(`/user/following/${username}`);
