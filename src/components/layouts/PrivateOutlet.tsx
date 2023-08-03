import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Backdrop, CircularProgress } from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useCurrentQuery } from 'redux/services/api';

const PrivateOutlet = () => {
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const location = useLocation();

  const { isLoading, isFetching } = useCurrentQuery();

  const loading = isLoading || isFetching;
  if (loading) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateOutlet;
