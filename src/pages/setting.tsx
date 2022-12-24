import { Box, Container } from '@mui/material';
import SettingNotifications from 'components/setting/setting-notifications';

const Setting = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <SettingNotifications />
      </Container>
    </Box>
  );
};

export default Setting;
