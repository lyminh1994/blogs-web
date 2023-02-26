import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  Typography,
} from '@mui/material';

const SettingsEmail = () => (
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

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button color="primary" variant="contained">
        Save
      </Button>
    </Box>
  </Card>
);

export default SettingsEmail;
