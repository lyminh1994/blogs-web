import { Avatar, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

import { faker } from '@faker-js/faker';

const UserAvatar = () => {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    country: faker.address.country(),
    jobTitle: faker.name.jobTitle(),
    timezone: faker.address.timeZone(),
    profileImage: 'https://i.pravatar.cc/300',
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
          src={data.profileImage}
          alt={data.profileImage}
          sx={{
            height: 164,
            width: 164,
            mb: 2,
          }}
        />
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {`${data.firstName} ${data.lastName}`}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {data.jobTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${data.city}, ${data.country}`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {data.timezone}
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

export default UserAvatar;
