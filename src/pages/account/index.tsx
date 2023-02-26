import { Grid } from '@mui/material';

import AccountAvatar from 'components/account/avatar';
import AccountTab from 'components/account/tabs';

const Account = () => (
  <Grid container spacing={3}>
    <Grid item lg={4} md={6} xs={12}>
      <AccountAvatar />
    </Grid>
    <Grid item lg={8} md={6} xs={12}>
      <AccountTab />
    </Grid>
  </Grid>
);

export default Account;
