import { ReactNode, SyntheticEvent, useState } from 'react';

import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';

import GlobalFeedTab from 'pages/tabs/global-feed-tab';
import TagFilterTab from 'pages/tabs/tag-filter-tab';
import YourFeedTab from 'pages/tabs/your-feed-tab';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
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
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Main = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Grid item xs={12} md={8}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Global Feed" {...a11yProps(0)} />
            <Tab label="Your Feed" {...a11yProps(1)} />
            <Tab label="Tag Filter" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <GlobalFeedTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <YourFeedTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TagFilterTab />
        </TabPanel>
      </Box>
    </Grid>
  );
};

export default Main;
