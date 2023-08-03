import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material';

import PreviewArticle from 'components/articles/PreviewArticle';

const Article = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <PreviewArticle />

        <Box sx={{ pt: 1 }} />

        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like. if you
              like.
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
            disableSpacing
          >
            <Button size="small">READ MORE</Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default Article;
