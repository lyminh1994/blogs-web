import http from 'utils/http';

export const getAll = async () => {
  return await http.get('/tags');
};
