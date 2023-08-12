import { useAuth } from 'hooks/useAuth';

import BannerAds from 'components/BannerAds';
import Tags from 'components/Tags';
import FeedArticles from 'components/articles/FeedArticles';
import RecentArticles from 'components/articles/RecentArticles';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <BannerAds />

      <Tags />

      {isAuthenticated && <FeedArticles />}

      <RecentArticles />
    </>
  );
};

export default Home;
