import { ReactNode, SyntheticEvent, useState } from 'react';
import { Avatar, Box, Card, CardContent, Container, Tab, Tabs, Typography } from '@mui/material';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const ProfileFavorites = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7',
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Avatar
                src={user.avatar}
                sx={{
                  height: 64,
                  mb: 2,
                  width: 64,
                }}
              />
              <Typography color="textPrimary" gutterBottom variant="h5">
                {user.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {`${user.city} ${user.country}`}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {user.timezone}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ pt: 3 }}>
          <Card>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="My Articles" {...a11yProps(0)} />
                  <Tab label="Favorite Articles" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                My Articles
              </TabPanel>
              <TabPanel value={value} index={1}>
                Favorited Articles
              </TabPanel>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileFavorites;
