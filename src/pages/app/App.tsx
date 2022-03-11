import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { appLoad, commonSelector } from 'store/common/commonSlice';
import { authSelector } from 'store/auth/authSlice';

import backgroundImage from 'assets/img/register_bg_2.png';

import Header from 'components/headers/Header';
import Footer from 'components/footers/FooterSmall';

import Home from 'pages/home/Home';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';

const App = () => {
  const dispatch = useAppDispatch();
  const { appLoaded, appName } = useAppSelector(commonSelector);
  const { auth } = useAppSelector(authSelector);

  useEffect(() => {
    dispatch(appLoad());
  }, []);

  if (appLoaded) {
    return (
      <>
        <Header appName={appName} user={auth && auth.user} />

        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
              style={{
                backgroundImage: 'url(' + backgroundImage + ')',
              }}
            ></div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Home />} />
            </Routes>

            <Footer absolute />
          </section>
        </main>
      </>
    );
  }

  return <div>Loading...</div>;
};

export default App;
