import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from 'components/layouts/AppLayout';
import PrivateOutlet from 'components/layouts/PrivateOutlet';

import Preview from 'pages/article';
import ArticleList from 'pages/article/articles';
import ArticleCreate from 'pages/article/create';
import ArticleEdit from 'pages/article/edit';
import ForgotPassword from 'pages/auth/forgot-password';
import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Error from 'pages/error';
import Home from 'pages/home';
import Account from 'pages/account';
import Profile from 'pages/profile';
import AccountSettings from 'pages/account/settings';

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
      { path: '/editor/:slug', element: <ArticleEdit /> },
      { path: '/editor', element: <ArticleCreate /> },
      {
        path: '/article/:slug',
        element: <Preview />,
      },
      { path: '/articles', element: <ArticleList /> },
      { path: '/profile/:publicId', element: <Profile /> },
      {
        path: '/account',
        element: <PrivateOutlet />,
        children: [
          { index: true, element: <Account /> },
          { path: '/account/settings', element: <AccountSettings /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
