import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from 'components/layouts';
import PrivateOutlet from 'components/layouts/private-outlet';

import User from 'pages/user';
import Error from 'pages/error';
import Home from 'pages/home';
import SignIn from 'pages/auth/sign-in';
import SignUp from 'pages/auth/sign-up';
import Setting from 'pages/user/settings';
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
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'article', element: <Article /> },
      { path: 'articles', element: <ArticleList /> },
      {
        path: ':userId',
        element: <PrivateOutlet />,
        children: [
          { index: true, element: <User /> },
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
