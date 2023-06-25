import { Box, Container, Stack, Typography } from '@mui/material';

import SettingsEmail from 'components/SettingsEmail';
import SettingsNotifications from 'components/SettingsNotifications';
import SettingsPhone from 'components/SettingsPhone';

const AccountSettings = () => (
  <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
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

export default AccountSettings;
