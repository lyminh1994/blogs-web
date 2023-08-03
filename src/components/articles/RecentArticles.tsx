import { ChangeEvent, useState } from 'react';

import { Divider, Typography } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from './Articles';

const RecentArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const { data, isLoading } = useGetArticlesQuery({
    limit: 10,
    offset: currentPage - 1,
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Articles
      </Typography>

      <Divider />

      {isLoading && !data ? (
        <p>No articles are here... yet.</p>
      ) : (
        <Articles
          articles={data?.articles}
          total={data?.articlesCount}
          currentPage={currentPage}
          onChange={handleChangePage}
        />
      )}
    </>
  );
};

export default RecentArticles;
