import { Box, Grid, Paper, Typography } from '@mui/material';
import type { Post } from 'pages/home';

interface HighlightPostProps {
  post: Post;
}

const HighlightPost = ({ post }: HighlightPostProps) => (
  <Paper
    sx={{
      position: 'relative',
      color: '#fff',
      mb: 4,
      backgroundColor: 'grey.800',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${post.image})`,
    }}
  >
    {<img style={{ display: 'none' }} src={post.image} alt={post.imageLabel} />}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    />
    <Grid container>
      <Grid item md={6}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {post.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

export default HighlightPost;
