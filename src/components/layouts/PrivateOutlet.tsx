import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Backdrop, CircularProgress } from '@mui/material';

import { useAuth } from 'hooks/useAuth';

const PrivateOutlet = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isLoading = false;
  if (isLoading) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateOutlet;
