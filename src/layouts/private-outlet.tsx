import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

const PrivateOutlet = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateOutlet;
