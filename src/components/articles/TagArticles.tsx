import { ChangeEvent, useState } from 'react';

import { Typography } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from './Articles';

const TagArticles = ({ tag }: { tag: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    tag: tag,
    page: currentPage - 1,
    size: 10,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return isLoading && !data ? (
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
  );
};

export default TagArticles;
