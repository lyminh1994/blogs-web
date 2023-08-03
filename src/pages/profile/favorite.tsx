import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import ProfileBanner from 'components/profile/Banner';
import Articles from 'components/articles/Articles';

const ProfileFavorites = () => {
  const { username } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: articlesData } = useGetArticlesQuery({
    limit: 10,
    offset: currentPage - 1,
    author: username,
  });

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <ProfileBanner username={username || ''} />

        <Box sx={{ pt: 3 }}>
          <Box sx={{ width: '100%' }}>
            <Articles
              articles={articlesData?.articles}
              total={articlesData?.articlesCount}
              currentPage={currentPage}
              onChange={handleChangePage}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileFavorites;
