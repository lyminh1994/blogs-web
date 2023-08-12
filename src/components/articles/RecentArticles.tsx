import { ChangeEvent, useState } from 'react';

import { Divider, Grid, Typography } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from './Articles';

const RecentArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    page: currentPage - 1,
    size: 10,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Grid item>
      <Typography variant="h6" gutterBottom>
        Recent Articles
      </Typography>

      <Divider />

      {isLoading && !data ? (
        <Typography variant="body1" alignItems="center">
          Loading....
        </Typography>
      ) : (
        <Articles
          articles={data?.contents}
          total={data?.totalElements}
          currentPage={currentPage}
          onChange={handleChangePage}
        />
      )}
    </Grid>
  );
};

export default RecentArticles;
