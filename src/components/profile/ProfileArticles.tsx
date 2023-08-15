import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from 'components/articles/Articles';

const ProfileArticles = () => {
  const { publicId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetArticlesQuery({
    author: publicId,
    page: currentPage - 1,
    size: 10,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Box sx={{ pt: 3 }}>
      <Box sx={{ width: '100%' }}>
        <Articles
          articles={data?.contents}
          total={data?.totalElements}
          currentPage={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};

export default ProfileArticles;
