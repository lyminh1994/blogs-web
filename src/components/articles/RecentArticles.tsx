import {
  Avatar,
  Box,
  Button,
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

import type { Article } from 'pages/home';

const RecentArticles = ({ articles }: { articles?: Article[] }) => (
  <Grid item>
    <Typography variant="h6" gutterBottom>
      Recent Articles
    </Typography>

    <Divider />

    <Grid container sx={{ py: 4 }} spacing={4}>
      {articles?.map((article, index) => (
        <Grid item md={6} key={index}>
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
                backgroundImage: `url(${article.image})`,
              }}
              role="img"
              href="#"
            />
            {<img style={{ display: 'none' }} src={article.image} alt={article.imageLabel} />}
            <CardContent>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {faker.company.name()}
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
              <Typography variant="body1" paragraph color="textSecondary">
                {article.description}
              </Typography>
              <Stack direction="row" spacing={1} paddingBottom={2}>
                <Chip label={faker.music.songName()} variant="outlined" />
              </Stack>
              <Box sx={{ display: 'flex', alignItems: 'end' }}>
                <Button>Read more</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default RecentArticles;
