import { Avatar, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

import { faker } from '@faker-js/faker';

import { useAccount } from 'hooks/account';

const AccountAvatar = () => {
  const { account } = useAccount();

  const additionInfo = {
    city: faker.address.city(),
    country: faker.address.country(),
    jobTitle: faker.name.jobTitle(),
    timezone: faker.address.timeZone(),
  };

  return (
    <Card>
      <CardContent
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar
          src={account?.profileImage || 'https://i.pravatar.cc/300'}
          alt={account?.profileImage}
          sx={{
            height: 164,
            width: 164,
            mb: 2,
          }}
        />
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {`${faker.name.firstName()} ${faker.name.lastName()}`}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {additionInfo.jobTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${additionInfo.city}, ${additionInfo.country}`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {additionInfo.timezone}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <Button variant="text" color="primary" fullWidth>
          Update picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountAvatar;
