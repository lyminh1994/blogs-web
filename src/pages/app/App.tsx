import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from 'hooks/useRedux';
import { appLoad } from 'store/auth/authSlice';

import Layout from 'components/layout/Layout';

import Home from 'pages/home/Home';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Editor from 'pages/editor/Editor';
import Settings from 'pages/user/Settings';
import ProfileFavorites from 'pages/user/ProfileFavorites';
import Account from 'pages/user/Account';
import Counter from 'pages/counter/Counter';
import NotFound from 'pages/error/NotFound';
import Article from 'pages/article/Article';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(appLoad);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="editor" element={<Editor />} />
        <Route path="editor/:slug" element={<Counter />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="settings" element={<Settings />} />
        <Route path=":username/favorites" element={<ProfileFavorites />} />
        <Route path=":username" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
