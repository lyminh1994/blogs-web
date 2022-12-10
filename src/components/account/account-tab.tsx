import { SyntheticEvent, useState } from 'react';
import { Divider, Tab, Tabs } from '@mui/material';

import { useAuth } from 'hooks/auth';

import AccountGeneral from './account-general';
import AccountNotifications from './account-notifications';
import AccountSecurity from './account-security';

const AccountTab = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState('general');

  const handleTabChange = (_event: SyntheticEvent<Element, Event>, value: string) => {
    setTab(value);
  };

  return (
    <>
      <Tabs onChange={handleTabChange} value={tab}>
        <Tab label="General" value="general" />
        <Tab label="Notifications" value="notifications" />
        <Tab label="Security" value="security" />
      </Tabs>
      <Divider sx={{ m: '0px 0px 24px' }} />
      {tab === 'general' && <AccountGeneral user={user} />}
      {tab === 'notifications' && <AccountNotifications />}
      {tab === 'security' && <AccountSecurity />}
    </>
  );
};

export default AccountTab;
