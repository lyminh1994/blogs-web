import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/features/auth-slice';

export const useAuth = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return useMemo(() => ({ isAuthenticated }), [isAuthenticated]);
};
