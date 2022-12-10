import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setCredentials } from 'redux/features/auth-slice';

import { useAppDispatch } from 'hooks/redux';

import Layout from 'layouts';
import PrivateOutlet from 'components/private-outlet';

import Article from 'pages/article';
import SignIn from 'pages/auth/sign-in';
import SignUp from 'pages/auth/sign-up';
import Editor from 'pages/editor';
import Error from 'pages/error';
import Home from 'pages/home';
import Account from 'pages/account';
import AccountFavorites from 'components/account/account-favorites';
import AccountSettings from 'components/account/account-settings';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials());
  }, [setCredentials]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="editor" element={<Editor />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="settings" element={<AccountSettings />} />
        <Route path="favorites/:publicId" element={<AccountFavorites />} />
        <Route path=":publicId" element={<PrivateOutlet />}>
          <Route index element={<Account />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
