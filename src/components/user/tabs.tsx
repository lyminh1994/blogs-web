import { SyntheticEvent, useState } from 'react';
import { Divider, Tab, Tabs } from '@mui/material';

import UserGeneral from './general';
import UserSecurity from './security';

const AccountTab = () => {
  const [tab, setTab] = useState('general');

  const handleTabChange = (_event: SyntheticEvent<Element, Event>, value: string) => {
    setTab(value);
  };

  return (
    <>
      <Tabs onChange={handleTabChange} value={tab}>
        <Tab label="General" value="general" />
        <Tab label="Security" value="security" />
      </Tabs>
      <Divider sx={{ mb: 3 }} />
      {tab === 'general' && <UserGeneral />}
      {tab === 'security' && <UserSecurity />}
    </>
  );
};

export default AccountTab;
