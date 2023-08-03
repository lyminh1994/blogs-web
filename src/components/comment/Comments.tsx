import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { Favorite } from '@mui/icons-material';

import { faker } from '@faker-js/faker';

import EditorComment from './EditorComment';

const Comments = () => {
  return (
    <div>
      <EditorComment />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Card>
            <CardMedia
              component="a"
              sx={{
                height: 280,
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${faker.image.urlPicsumPhotos()})`,
              }}
              role="img"
              href="#"
            />
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {faker.lorem.slug()}
              </Typography>
              <Typography variant="body1" paragraph color="textSecondary">
                {faker.lorem.paragraph()}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label={'tag1'} variant="outlined" />
                <Chip label={'tag2'} variant="outlined" />
              </Stack>
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
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardMedia
              component="a"
              sx={{
                height: 280,
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${faker.image.urlPicsumPhotos()})`,
              }}
              role="img"
              href="#"
            />
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {faker.lorem.slug()}
              </Typography>
              <Typography variant="body1" paragraph color="textSecondary">
                {faker.lorem.paragraph()}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label={'tag1'} variant="outlined" />
                <Chip label={'tag2'} variant="outlined" />
              </Stack>
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
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comments;
