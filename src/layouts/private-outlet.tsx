import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { useAuth } from 'hooks/auth';

const PrivateOutlet = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

export default PrivateOutlet;
