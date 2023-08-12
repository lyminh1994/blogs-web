import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { Favorite as FavoriteIcon } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { red } from '@mui/material/colors';

import { useAuth } from 'hooks/useAuth';
import {
  useFavoriteMutation,
  useGetArticleQuery,
  useRemoveArticleMutation,
  useUnfavoriteMutation,
} from 'redux/services/article';

const PreviewArticle = () => {
  const { slug } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useGetArticleQuery(slug || '');

  const [favorite, { isLoading: isFavoriteLoading }] = useFavoriteMutation();
  const [unfavorite, { isLoading: isUnFavoriteLoading }] = useUnfavoriteMutation();
  const [remove, { isLoading: isRemoveLoading }] = useRemoveArticleMutation();

  const handleFavorites = async () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      try {
        if (data?.favorite) {
          await unfavorite(slug || '').unwrap();
        } else {
          await favorite(slug || '').unwrap();
        }
      } catch (err) {
        enqueueSnackbar(JSON.stringify(err, null, 2), {
          variant: 'error',
        });
      }
    }
  };

  const handleRemove = async () => {
    try {
      await remove(slug || '').unwrap();
      navigate('/articles');
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), {
        variant: 'error',
      });
    }
  };

  return isLoading && !data ? (
    <Typography variant="body1" alignItems="center">
      Loading....
    </Typography>
  ) : (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={data?.author.profileImage} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavorites}
            disabled={isFavoriteLoading || isUnFavoriteLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <FavoriteIcon
                fontSize="medium"
                style={{ color: data?.favorite ? red[600] : red[100] }}
              />
            )}
          </IconButton>
        }
        title={data?.author.fullName}
        subheader={data?.createdAt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.body}
        </Typography>
        <Stack
          sx={{
            alignSelf: 'stretch',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
          direction="row"
          spacing={1}
          paddingBottom={2}
        >
          {data?.tagNames.map((tag) => <Chip label={tag} key={tag} variant="outlined" />)}
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={handleRemove} disabled={isRemoveLoading}>
          Delete
        </Button>
        <Button onClick={() => navigate(`/editor/${data?.slug}`)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

export default PreviewArticle;
