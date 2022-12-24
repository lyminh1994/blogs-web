import { Box, Container, Grid } from '@mui/material';

import AccountAvatar from 'components/account/account-avatar';
import AccountTab from 'components/account/account-tab';

const Account = () => (
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
          <AccountAvatar />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <AccountTab />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Account;
