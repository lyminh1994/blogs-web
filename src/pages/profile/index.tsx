import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { useGetArticlesQuery } from 'redux/services/article';

import ProfileBanner from 'components/profile/Banner';
import Articles from 'components/articles/Articles';

const ProfileFavorites = () => {
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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <ProfileBanner publicId={publicId || ''} />

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
      </Container>
    </Box>
  );
};

export default ProfileFavorites;
