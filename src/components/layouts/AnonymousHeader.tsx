import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const AnonymousHeader = () => (
  <>
    <Typography
      component={RouterLink}
      to="/login"
      variant="body2"
      sx={{ p: 1, textDecoration: 'none' }}
    >
      Login
    </Typography>
    <Typography
      component={RouterLink}
      to="/register"
      variant="body2"
      sx={{ p: 1, textDecoration: 'none' }}
    >
      Register
    </Typography>
  </>
);

export default AnonymousHeader;
