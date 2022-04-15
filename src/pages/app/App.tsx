import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import theme from 'utils/theme';

import Header from 'components/headers/Header';
import Footer from 'components/footers/Footer';
import Home from 'pages/home/Home';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Editor from 'pages/editor/Editor';
import { Article } from '@mui/icons-material';
import Settings from 'pages/auth/Settings';
import ProfileFavorites from 'pages/auth/ProfileFavorites';
import Account from 'pages/auth/Account';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Login', url: '/login' },
  { title: 'Editor', url: '/editor' },
  { title: 'Settings', url: '/settings' },
  { title: 'ProfileFavorites', url: '/@user1/favorites' },
  { title: 'Account', url: '/@user1' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/editor/:slug" element={<Editor />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/@:username/favorites" element={<ProfileFavorites />} />
            <Route path="/@:username" element={<Account />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
};

export default App;
