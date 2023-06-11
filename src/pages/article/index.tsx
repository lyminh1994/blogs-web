import { nanoid } from '@reduxjs/toolkit';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  CardHeader,
  IconButton,
  CardActions,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const Article = () => {
  const product = {
    id: nanoid(),
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594',
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <CardContent
            sx={{
              position: 'relative',
              color: '#fff',
              backgroundColor: 'grey.800',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(https://loremflickr.com/640/480/paris)`,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Avatar sx={{ width: 80, height: 80 }} alt="Product" src={product.media} />
            </Box>
            <Typography align="center" variant="h5" color="inherit" gutterBottom>
              {product.title}
            </Typography>
            <Typography align="center" color="inherit" paragraph variant="body1">
              {product.description}
            </Typography>
          </CardContent>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Button color="inherit">+ Follow</Button>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  {product.totalDownloads} Following
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Box sx={{ pt: 3 }}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
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
                // 👇 Edit padding to further adjust position
                p: 2,
              }}
              disableSpacing
            >
              <Button size="small">READ MORE</Button>
            </CardActions>
          </Card>
          <Box sx={{ pt: 1 }} />
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
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
                // 👇 Edit padding to further adjust position
                p: 2,
              }}
              disableSpacing
            >
              <Button size="small">READ MORE</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Article;
