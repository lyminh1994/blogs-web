import { SyntheticEvent, useState } from 'react';
import { Divider, Tab, Tabs } from '@mui/material';

import { useAccount } from 'hooks/account';

import AccountGeneral from './account-general';
import AccountSecurity from './account-security';

const AccountTab = () => {
  const { account } = useAccount();
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
      {tab === 'general' && <AccountGeneral user={account} />}
      {tab === 'security' && <AccountSecurity />}
    </>
  );
};

export default AccountTab;
