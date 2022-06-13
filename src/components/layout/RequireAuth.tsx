import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/useRedux';
import { selectAuth } from 'store/auth/authSlice';

function RequireAuth() {
  const { accessToken } = useAppSelector(selectAuth);
  const location = useLocation();

  return accessToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
