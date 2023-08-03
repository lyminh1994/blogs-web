import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from 'components/layouts/AppLayout';
import PrivateOutlet from 'components/layouts/PrivateOutlet';

import Preview from 'pages/article';
import ArticleList from 'pages/article/articles';
import ArticleEditor from 'pages/article/editor';
import ForgotPassword from 'pages/auth/forgot-password';
import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Error from 'pages/error';
import Home from 'pages/home';
import Profile from 'pages/profile';
import ProfileFavorites from 'pages/profile/favorite';
import ProfileSettings from 'pages/profile/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/editor/:slug', element: <ArticleEditor /> },
      { path: '/editor', element: <ArticleEditor /> },
      {
        path: '/article/:slug',
        element: <Preview />,
      },
      { path: '/articles', element: <ArticleList /> },
      { path: '/profile/:username', element: <ProfileFavorites /> },
      {
        path: '/account/:username',
        element: <PrivateOutlet />,
        children: [
          { index: true, element: <Profile /> },
          { path: '/account/:username/settings', element: <ProfileSettings /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
