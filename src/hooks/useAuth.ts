import { useMemo } from 'react';
import { useTypedSelector } from './redux';
import { selectIsAuthenticated } from 'redux/features/authSlice';

export const useAuth = () => {
  const { user, isAuthenticated } = useTypedSelector(selectIsAuthenticated);

  return useMemo(() => ({ user, isAuthenticated }), [user, isAuthenticated]);
};
