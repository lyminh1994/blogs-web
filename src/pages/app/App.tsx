import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from 'hooks/useRedux';
import { appLoaded } from 'store/auth/authSlice';

import Layout from 'components/layout/Layout';
import RequireAuth from 'components/layout/RequireAuth';

import Article from 'pages/article/Article';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Editor from 'pages/editor/Editor';
import NotFound from 'pages/error/NotFound';
import Home from 'pages/home/Home';
import Account from 'pages/user/Account';
import ProfileFavorites from 'pages/user/ProfileFavorites';
import Settings from 'pages/user/Settings';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appLoaded());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="editor" element={<Editor />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favorites/:username" element={<ProfileFavorites />} />
        <Route path=":username" element={<RequireAuth />}>
          <Route index element={<Account />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
