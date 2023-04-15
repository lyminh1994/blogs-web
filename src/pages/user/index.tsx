import { Grid } from '@mui/material';

import UserAvatar from 'components/user/avatar';
import UserTabs from 'components/user/tabs';

const User = () => (
  <Grid container spacing={3}>
    <Grid item lg={4} md={6} xs={12}>
      <UserAvatar />
    </Grid>
    <Grid item lg={8} md={6} xs={12}>
      <UserTabs />
    </Grid>
  </Grid>
);

export default User;
