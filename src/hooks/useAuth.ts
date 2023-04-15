import { useMemo } from 'react';
import { useTypedSelector } from './redux';
import { selectIsAuthenticator } from 'redux/features/authSlice';

export const useAuth = () => {
  const isAuthenticator = useTypedSelector(selectIsAuthenticator);

  return useMemo(() => ({ isAuthenticator }), [isAuthenticator]);
};
