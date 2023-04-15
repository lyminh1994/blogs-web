import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from 'components/layouts';
import PrivateOutlet from 'components/layouts/private-outlet';

import User from 'pages/user';
import Create from 'pages/article/create';
import Error from 'pages/error';
import Home from 'pages/home';
import SignIn from 'pages/auth/sign-in';
import SignUp from 'pages/auth/sign-up';
import Setting from 'pages/user/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
        path: ':userId',
        element: <PrivateOutlet />,
        children: [
          {
            index: true,
            element: <User />,
          },
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
