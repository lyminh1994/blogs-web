import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Backdrop, CircularProgress } from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useGetUserQuery } from 'redux/services/user';

const PrivateOutlet = () => {
  const { isAuthenticator } = useAuth();
  const location = useLocation();

  const { isLoading, isFetching } = useGetUserQuery();

  const loading = isLoading || isFetching;
  if (loading) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return isAuthenticator ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateOutlet;
