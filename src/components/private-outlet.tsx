import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? <Outlet /> : <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateOutlet;
