import http from 'utils/http';

const DEFAULT_PAGE_SIZE = 10;

const limit = (pageSize: number, pageNumber: number) =>
  `page-size=${pageSize}&page-number=${pageNumber ? pageNumber * pageSize : 0}`;

export const getTags = async (pageNumber: number) => {
  return await http.get(`/tags?${limit(DEFAULT_PAGE_SIZE, pageNumber)}`);
};
