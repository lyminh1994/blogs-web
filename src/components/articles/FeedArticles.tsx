import { ChangeEvent, useState } from 'react';

import { Divider, Grid, Typography } from '@mui/material';

import Articles from './Articles';

import { useGetFeedQuery } from 'redux/services/article';

const FeedArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetFeedQuery({ page: currentPage - 1, size: 10 });

  const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Grid item>
      <Typography variant="h6" gutterBottom>
        Feed Articles
      </Typography>

      <Divider />

      {isLoading && !data ? (
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
      )}
    </Grid>
  );
};

export default FeedArticles;
