import { ChangeEvent, useState } from 'react';

import { Typography } from '@mui/material';

import Articles from './Articles';

import { useAuth } from 'hooks/useAuth';
import { useGetArticlesQuery } from 'redux/services/article';

const FavoriteArticles = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    page: currentPage - 1,
    size: 10,
    favoriteBy: user?.publicId,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return isLoading && !data ? (
    <Typography variant="body1" alignItems="center">
      No articles are here... yet.
    </Typography>
  ) : (
    <Articles
      articles={data?.contents}
      total={data?.totalElements}
      currentPage={currentPage}
      onChange={handleChangePage}
    />
  );
};

export default FavoriteArticles;
