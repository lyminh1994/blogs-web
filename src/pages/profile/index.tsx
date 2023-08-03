import { SyntheticEvent, useState } from 'react';
import { Box, Container, Grid, Divider, Tab, Tabs } from '@mui/material';

import ProfileAvatar from 'components/profile/Avatar';
import ProfileGeneral from 'components/profile/General';
import ProfileSecurity from 'components/profile/Security';

const Profile = () => {
  const [tab, setTab] = useState('general');

  const handleTabChange = (_: SyntheticEvent<Element, Event>, value: string) => {
    setTab(value);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} xs={12}>
            <ProfileAvatar />
          </Grid>
          <Grid item lg={8} md={8} xs={12}>
            <Tabs onChange={handleTabChange} value={tab}>
              <Tab label="General" value="general" />
              <Tab label="Security" value="security" />
            </Tabs>
            <Divider sx={{ mb: 3 }} />
            {tab === 'general' && <ProfileGeneral />}
            {tab === 'security' && <ProfileSecurity />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
