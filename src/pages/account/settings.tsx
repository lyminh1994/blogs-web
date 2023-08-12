import { Container, Stack, Typography } from '@mui/material';

import SettingsEmail from 'components/account/settings/SettingsEmail';
import SettingsNotifications from 'components/account/settings/SettingsNotifications';
import SettingsPhone from 'components/account/settings/SettingsPhone';

const ProfileSettings = () => (
  <Container component="main" sx={{ flexGrow: 1, py: 2 }} maxWidth="lg">
    <Stack spacing={3}>
      <Typography variant="h4">Settings</Typography>

      <SettingsNotifications />

      <SettingsEmail />

      <SettingsPhone />
    </Stack>
  </Container>
);

export default ProfileSettings;
