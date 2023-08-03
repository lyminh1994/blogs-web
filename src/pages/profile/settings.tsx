import { Box, Container, Stack, Typography } from '@mui/material';

import SettingsEmail from 'components/settings/SettingsEmail';
import SettingsNotifications from 'components/settings/SettingsNotifications';
import SettingsPhone from 'components/settings/SettingsPhone';

const ProfileSettings = () => (
  <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <Typography variant="h4">Settings</Typography>

        <SettingsNotifications />

        <SettingsEmail />

        <SettingsPhone />
      </Stack>
    </Container>
  </Box>
);

export default ProfileSettings;
