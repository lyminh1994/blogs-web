import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import { faker } from '@faker-js/faker';

import type { Post } from 'pages/home';

interface FeaturedPostsProps {
  posts?: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => (
  <Grid item>
    <Typography variant="h6" gutterBottom>
      Featured Posts
    </Typography>

    <Divider />

    <Grid container spacing={4} sx={{ py: 4 }}>
      {posts?.map((post) => (
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
                backgroundImage: `url(${post.image})`,
              }}
              role="img"
              href="#"
            />
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageLabel} />}
            <CardContent>
              <Stack direction="row" spacing={1} paddingBottom={2}>
                <Chip label={faker.music.songName()} variant="outlined" />
              </Stack>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {faker.company.name()}
              </Typography>
              <Typography variant="body1" paragraph color="textSecondary">
                {post.description}
              </Typography>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Avatar alt={faker.image.avatar()} src={faker.image.avatar()} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">{faker.internet.userName()}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {faker.date.past().toDateString()}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default FeaturedPosts;
