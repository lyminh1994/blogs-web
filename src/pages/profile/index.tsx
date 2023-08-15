import { Box, Container } from '@mui/material';

import ProfileBanner from 'components/profile/Banner';
import ProfileArticles from 'components/profile/ProfileArticles';
const ProfileFavorites = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <ProfileBanner />

        <ProfileArticles />
      </Container>
    </Box>
  );
};

export default ProfileFavorites;
