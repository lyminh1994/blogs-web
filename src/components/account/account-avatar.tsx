import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';

import { useAccount } from 'hooks/account';

const ProfileAvatar = () => {
  const { account } = useAccount();

  const additionInfo = {
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    timezone: 'GTM-7',
  };

  return (
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
            src={account?.profileImage || 'https://i.pravatar.cc/300'}
            sx={{
              height: 164,
              mb: 2,
              width: 164,
            }}
          />

          <Typography color="textPrimary" gutterBottom variant="h5">
            {`${account?.firstName} ${account?.lastName}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {additionInfo.jobTitle}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${additionInfo.city}, ${additionInfo.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {additionInfo.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Update picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileAvatar;
