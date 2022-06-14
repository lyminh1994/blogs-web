import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
