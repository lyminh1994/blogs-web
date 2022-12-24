import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  Typography,
} from '@mui/material';

const SettingNotifications = () => {
  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Email" />
      <CardContent>
        <Grid container>
          <Grid item md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <div>
                <Typography variant="subtitle1">Product updates</Typography>
                <Typography variant="body2">News, announcements, and product updates.</Typography>
              </div>
              <Switch />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <div>
                <Typography variant="subtitle1">Security updates</Typography>
                <Typography variant="body2">
                  Important notifications about your account security.
                </Typography>
              </div>
              <Switch />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardHeader subheader="The information can be edited" title="Phone" />
      <CardContent>
        <Grid container>
          <Grid item md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <div>
                <Typography variant="subtitle1">Security updates</Typography>
                <Typography variant="body2">
                  Important notifications about your account security.
                </Typography>
              </div>
              <Switch />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SettingNotifications;
