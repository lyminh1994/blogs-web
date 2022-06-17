import { Box, Container } from '@mui/material';

import ArticlePreview from './ArticlePreview';

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
