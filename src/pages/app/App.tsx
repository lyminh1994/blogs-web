import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from 'hooks/useRedux';
import { setCredentials } from 'store/auth/authSlice';

import Layout from 'components/layout/Layout';
import PrivateOutlet from 'components/layout/PrivateOutlet';

import Article from 'pages/article/Article';
import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import Editor from 'pages/editor/Editor';
import NotFound from 'pages/error/NotFound';
import Home from 'pages/home/Home';
import Account from 'pages/user/Account';
import ProfileFavorites from 'pages/user/ProfileFavorites';
import Settings from 'pages/user/Settings';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="editor" element={<Editor />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favorites/:username" element={<ProfileFavorites />} />
        <Route path=":username" element={<PrivateOutlet />}>
          <Route index element={<Account />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
