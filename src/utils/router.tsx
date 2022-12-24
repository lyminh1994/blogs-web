import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from 'layouts';
import PrivateOutlet from 'layouts/private-outlet';

import Account from 'pages/account';
import Article from 'pages/article';
import Editor from 'pages/editor';
import Error from 'pages/error';
import Home from 'pages/home';
import SignIn from 'pages/sign-in';
import SignUp from 'pages/sign-up';
import Profile from 'pages/profile';
import Setting from 'pages/setting';

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
        element: <Editor />,
      },
      {
        path: 'editor/:slug',
        element: <Editor />,
      },
      {
        path: 'article/:id',
        element: <Article />,
      },
      {
        path: ':publicId/favorites',
        element: <Profile />,
      },
      {
        path: ':accountId',
        element: <PrivateOutlet />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          { path: 'setting', element: <Setting /> },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
