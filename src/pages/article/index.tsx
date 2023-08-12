import { Box, Container } from '@mui/material';

import PreviewArticle from 'components/articles/PreviewArticle';
import Comments from 'components/comment/Comments';

const Article = () => {
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
      maxWidth="lg"
    >
      <PreviewArticle />

      <Box sx={{ mt: 3 }} />

      <Comments />
    </Container>
  );
};

export default Article;
