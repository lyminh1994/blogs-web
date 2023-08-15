import { SyntheticEvent, useState } from 'react';

import { Container, Grid, Divider, Tab, Tabs } from '@mui/material';

import AccountAvatar from 'components/account/Avatar';
import AccountGeneral from 'components/account/General';
import AccountSecurity from 'components/account/Security';

const Account = () => {
  const [tab, setTab] = useState('general');

  const handleTabChange = (_: SyntheticEvent, value: string) => {
    setTab(value);
  };

  return (
    <Container component="main" sx={{ flexGrow: 1, py: 2 }} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={4}>
          <AccountAvatar />
        </Grid>

        <Grid item md={8}>
          <Tabs onChange={handleTabChange} value={tab}>
            <Tab label="General" value="general" />
            <Tab label="Security" value="security" />
          </Tabs>

          <Divider sx={{ mb: 2 }} />

          {tab === 'general' && <AccountGeneral />}
          {tab === 'security' && <AccountSecurity />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
