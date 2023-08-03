import { useMemo } from 'react';
import { useTypedSelector } from './redux';
import { selectIsAuthenticated } from 'redux/features/authSlice';

export const useAuth = () => {
  const auth = useTypedSelector(selectIsAuthenticated);

  return useMemo(() => ({ auth }), [auth]);
};
