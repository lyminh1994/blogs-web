import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import PrivateOutlet from 'components/PrivateOutlet';

import Account from 'pages/account';
import Error from 'pages/error';
import Home from 'pages/home';
import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Setting from 'pages/account/settings';
import ForgotPassword from 'pages/auth/forgot-password';
import ArticleList from 'pages/article/articles';
import Article from 'pages/article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'article', element: <Article /> },
      { path: 'articles', element: <ArticleList /> },
      {
        path: ':accountId',
        element: <PrivateOutlet />,
        children: [
          { index: true, element: <Account /> },
          { path: 'settings', element: <Setting /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
