import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useFollowMutation, useGetProfileQuery, useUnFollowMutation } from 'redux/services/user';

const ProfileBanner = () => {
  const { isAuthenticated } = useAuth();
  const { publicId } = useParams();
  const navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useGetProfileQuery(publicId || '');
  const [followMutation] = useFollowMutation();
  const [unFollowMutation] = useUnFollowMutation();

  const handleFollow = async () => {
    if (!isAuthenticated) {
      navigator('/login');
    } else {
      try {
        if (data && data.following) {
          await unFollowMutation(publicId || '').unwrap();
        } else {
          await followMutation(publicId || '').unwrap();
        }
      } catch (err) {
        enqueueSnackbar(JSON.stringify(err, null, 2), {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          position: 'relative',
          color: '#fff',
          backgroundColor: 'grey.800',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(https://loremflickr.com/640/480/paris)`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ width: 80, height: 80 }} alt="Product" src={data?.profileImage} />
        </Box>
        <Typography align="center" variant="h5" color="inherit" gutterBottom>
          {data?.fullName}
        </Typography>
        <Typography align="center" color="inherit" paragraph variant="body1">
          {data?.profileImage}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Button color="inherit" variant="outlined" onClick={handleFollow}>
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                `${data && !data.following ? 'Follow' : 'Unfollow'}`
              )}
            </Button>
          </Grid>

          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
              500 Following
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
export default ProfileBanner;
