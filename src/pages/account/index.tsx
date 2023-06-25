import { Box, Container, Grid } from '@mui/material';

import UserAvatar from 'components/account/avatar';
import UserTabs from 'components/account/tabs';

const User = () => (
  <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <UserAvatar />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <UserTabs />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default User;
