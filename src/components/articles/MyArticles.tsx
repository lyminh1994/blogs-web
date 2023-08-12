import { ChangeEvent, useState } from 'react';

import { Box, Typography } from '@mui/material';

import Articles from './Articles';

import { useAuth } from 'hooks/useAuth';
import { useGetArticlesQuery } from 'redux/services/article';

const MyArticles = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    page: currentPage - 1,
    size: 10,
    author: user?.publicId,
  });

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return isLoading ? (
    <Box>
      <Typography variant="body1" alignItems="center">
        No articles are here... yet.
      </Typography>
    </Box>
  ) : (
    <Articles
      articles={data?.contents}
      total={data?.totalElements}
      currentPage={currentPage}
      onChange={handleChangePage}
    />
  );
};

export default MyArticles;
