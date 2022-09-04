import http from 'utils/http';
import { UpdateUserRequest } from 'types/user';

export const updateUserInfo = async (user: UpdateUserRequest) => {
  return await http.put('/user', user);
};

export const getProfile = async (username: string) => await http.get(`/user/${username}`);

export const followByUsername = async (username: string) =>
  await http.post(`/user/${username}/following`);

export const unFollowByUsername = async (username: string) =>
  await http.delete(`/user/${username}/following`);
