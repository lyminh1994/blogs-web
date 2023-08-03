import { Divider, Grid, Typography } from '@mui/material';

import BannerAds from 'components/BannerAds';
import Tags from 'components/Tags';
import FeedArticles from 'components/articles/FeedArticles';
import RecentArticles from 'components/articles/RecentArticles';

import { useAuth } from 'hooks/useAuth';
import { useGetTagsQuery } from 'redux/services/tag';

const Home = () => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  const { data: tagsData, isLoading: isTagsLoading } = useGetTagsQuery();

  return (
    <>
      <BannerAds />

      <Grid item>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Popular Tags
        </Typography>

        <Divider />

        {isTagsLoading && !tagsData ? <p>Loading...</p> : <Tags tags={tagsData?.tags} />}
      </Grid>

      <Grid item>{isAuthenticated ? <FeedArticles /> : <RecentArticles />}</Grid>
    </>
  );
};

export default Home;
