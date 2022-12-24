import { useEffect } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { setCredentials } from 'redux/features/auth-slice';
import Router from 'utils/router';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials());
  }, [setCredentials]);

  return <Router />;
};

export default App;
