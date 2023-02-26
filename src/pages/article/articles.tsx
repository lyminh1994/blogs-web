import { Box, Container } from '@mui/material';

import ArticlePreview from './preview';

const ArticleList = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg">
        <ArticlePreview />
      </Container>
    </Box>
  );
};

export default ArticleList;
