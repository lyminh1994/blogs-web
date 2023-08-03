import { ChangeEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { faker } from '@faker-js/faker';

import type { Article } from 'types/app';

const Articles = ({
  articles,
  total,
  currentPage,
  onChange,
}: {
  articles?: Article[];
  total?: number;
  currentPage: number;
  onChange?: (event: ChangeEvent<unknown>, page: number) => void;
}) => {
  return (
    <>
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
                  backgroundImage: `url(${faker.image.urlPicsumPhotos()})`,
                }}
                role="img"
                href="#"
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  <Link
                    component={RouterLink}
                    to={`/article/${article.slug}`}
                    sx={{ textDecoration: 'none' }}
                  >
                    {article.title}
                  </Link>
                </Typography>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Avatar alt={article.author.image} src={article.author.image} />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">
                      <Link
                        component={RouterLink}
                        to={`/profile/${article.author.username}`}
                        sx={{ textDecoration: 'none' }}
                      >
                        {article.author.username}
                      </Link>
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {article.createdAt}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" paragraph color="textSecondary">
                  {article.description}
                </Typography>
                <Stack direction="row" spacing={1} paddingBottom={2}>
                  {article.tagList.map((tag) => (
                    <Chip label={tag} key={tag} variant="outlined" />
                  ))}
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
                <Button size="small">READ MORE</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="flex-end">
        <Pagination
          count={total ? Math.round(total / 10) : 0}
          page={currentPage}
          onChange={onChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: KeyboardArrowLeftIcon,
                next: KeyboardArrowRightIcon,
              }}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default Articles;
