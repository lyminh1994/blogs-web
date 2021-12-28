import http from 'utils/http';

export const follow = async (username: string) => await http.post(`/profiles/${username}/follow`);

export const get = async (username: string) => await http.get(`/profiles/${username}`);

export const unFollow = async (username: string) =>
  await http.delete(`/profiles/${username}/follow`);
