import { ReactNode, SyntheticEvent, useState } from 'react';
import { Box, Card, Container, Tab, Tabs, Typography } from '@mui/material';

import MyArticles from 'components/articles/MyArticles';
import FavoriteArticles from 'components/articles/FavoriteArticles';

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: {
  children?: ReactNode;
  index: number;
  value: number;
}) => (
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

const ArticleList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="My Articles" {...a11yProps(0)} />
                <Tab label="Favorite Articles" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <MyArticles />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FavoriteArticles />
            </TabPanel>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ArticleList;
