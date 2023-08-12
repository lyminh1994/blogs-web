import { SyntheticEvent, useState } from 'react';
import { Container, Divider, Grid, Tab, Tabs } from '@mui/material';

import MyArticles from 'components/articles/MyArticles';
import FavoriteArticles from 'components/articles/FavoriteArticles';

const ArticleList = () => {
  const [tab, setTab] = useState('my-articles');

  const handleTabChange = (_: SyntheticEvent, value: string) => {
    setTab(value);
  };

  return (
    <Container component="main" sx={{ flexGrow: 1, py: 2 }} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item>
          <Tabs onChange={handleTabChange} value={tab}>
            <Tab label="My Articles" value="my-articles" />
            <Tab label="Favorite Articles" value="favorite-articles" />
          </Tabs>

          <Divider sx={{ mb: 2 }} />

          {tab === 'my-articles' && <MyArticles />}
          {tab === 'favorite-articles' && <FavoriteArticles />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleList;
