import { ChangeEvent, useState } from 'react';

import { Divider, Typography } from '@mui/material';

import { useGetFeedQuery } from 'redux/services/article';

import Articles from './Articles';

const FeedArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const { data, isLoading } = useGetFeedQuery(currentPage - 1);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Feed Articles
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

export default FeedArticles;
