import React from 'react';
import { useAppSelector } from 'store/hooks';
import { authSelector } from 'store/auth/authSlice';
import { commonSelector } from 'store/common/commonSlice';

import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';

const Home = () => {
  const { appName } = useAppSelector(commonSelector);
  const { auth } = useAppSelector(authSelector);

  return (
    <div className="home-page">
      <Banner appName={appName} token={auth && auth.token} />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
