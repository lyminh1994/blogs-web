import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from 'layouts';
import PrivateOutlet from 'layouts/private-outlet';

import Account from 'pages/account';
import Create from 'pages/article/create';
import Error from 'pages/error';
import Home from 'pages/home';
import SignIn from 'pages/auth/sign-in';
import SignUp from 'pages/auth/sign-up';
import Setting from 'pages/account/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'editor',
        element: <Create />,
      },
      {
        path: ':accountId',
        element: <PrivateOutlet />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          { path: 'settings', element: <Setting /> },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
