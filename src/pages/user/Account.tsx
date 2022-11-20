import { Box, Container, Grid } from '@mui/material';

import ProfileAvatar from './ProfileAvatar';
import ProfileDetails from './ProfileDetails';

const Account = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <ProfileAvatar />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Account;
