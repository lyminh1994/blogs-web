import { useNavigate } from 'react-router-dom';
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
import {
  useFollowByUsernameMutation,
  useGetProfileQuery,
  useUnFollowByUsernameMutation,
} from 'redux/services/user';

const ProfileBanner = ({ username }: { username: string }) => {
  const navigator = useNavigate();
  const { auth } = useAuth();

  const { data, refetch, isFetching } = useGetProfileQuery(username);
  const [followMutation, { isLoading: isFollowLoading }] = useFollowByUsernameMutation();
  const [unFollowMutation, { isLoading: isUnFollowLoading }] = useUnFollowByUsernameMutation();

  const handleFollow = async () => {
    if (!auth.isAuthenticated) {
      navigator('/login');
    } else {
      if (data?.profile.following) {
        await unFollowMutation(username).unwrap();
      } else {
        await followMutation(username).unwrap();
      }
      refetch();
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
          <Avatar sx={{ width: 80, height: 80 }} alt="Product" src={data?.profile.image} />
        </Box>
        <Typography align="center" variant="h5" color="inherit" gutterBottom>
          {data?.profile.username}
        </Typography>
        <Typography align="center" color="inherit" paragraph variant="body1">
          {data?.profile.bio}
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
            <Button
              color="inherit"
              variant="outlined"
              disabled={isFollowLoading || isUnFollowLoading}
              onClick={handleFollow}
            >
              {isFollowLoading || isUnFollowLoading || isFetching ? (
                <CircularProgress size={24} />
              ) : (
                `${data?.profile.following ? '-' : '+'}1 Follow`
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
