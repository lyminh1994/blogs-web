import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';

const Settings = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Settings
        </Typography>
        <form>
          <Card>
            <CardHeader subheader="Manage the notifications" title="Notifications" />
            <Divider />
            <CardContent>
              <Grid container spacing={6} wrap="wrap">
                <Grid
                  item
                  md={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  xs={12}
                >
                  <Typography color="textPrimary" gutterBottom variant="h6">
                    Notifications
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Push Notifications"
                  />
                  <FormControlLabel control={<Checkbox />} label="Text Messages" />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Phone calls"
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  xs={12}
                >
                  <Typography color="textPrimary" gutterBottom variant="h6">
                    Messages
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                  <FormControlLabel
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Phone calls"
                  />
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
        </form>
      </Container>
    </Box>
  );
};

export default Settings;
