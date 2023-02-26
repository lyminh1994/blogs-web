import { Stack, Typography } from '@mui/material';

import SettingsEmail from 'components/settings/email';
import SettingsNotifications from 'components/settings/notifications';
import SettingsPhone from 'components/settings/phone';

const AccountSettings = () => (
  <Stack spacing={3}>
    <Typography variant="h4">Settings</Typography>

    <SettingsNotifications />

    <SettingsEmail />

    <SettingsPhone />
  </Stack>
);

export default AccountSettings;
