import { useNavigate, useParams } from 'react-router-dom';
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
import { Favorite as FavoriteIcon } from '@mui/icons-material';

import {
  useFavoriteArticleMutation,
  useGetArticleQuery,
  useRemoveArticleMutation,
  useUnfavoriteArticleMutation,
} from 'redux/services/article';
import { red } from '@mui/material/colors';
import { useAuth } from 'hooks/useAuth';

const PreviewArticle = () => {
  const { auth } = useAuth();
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, refetch, isLoading, isFetching } = useGetArticleQuery(slug || '');

  const [favoriteMutation, { isLoading: isFavoriteLoading }] = useFavoriteArticleMutation();
  const [unfavoriteMutation, { isLoading: isUnfavoriteLoading }] = useUnfavoriteArticleMutation();
  const [removeMutation] = useRemoveArticleMutation();

  const handleFavorites = async () => {
    if (!auth.isAuthenticated) {
      navigate('/login');
    } else {
      if (data?.article.favorited) {
        await unfavoriteMutation(slug || '').unwrap();
      } else {
        await favoriteMutation(slug || '').unwrap();
      }
      refetch();
    }
  };

  const handleDelete = async () => {
    await removeMutation(slug || '').unwrap();
    navigate(-1);
  };

  return isLoading && !data ? (
    <p>Loading....</p>
  ) : (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={data?.article.author.image} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavorites}
            disabled={isFavoriteLoading || isUnfavoriteLoading}
          >
            {isFetching ? (
              <CircularProgress size={24} />
            ) : (
              <FavoriteIcon
                fontSize="large"
                style={{ color: data?.article.favorited ? red[600] : red[100] }}
              />
            )}
          </IconButton>
        }
        title={data?.article.author.username}
        subheader={data?.article.createdAt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.article.body}
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
        <Stack direction="row" spacing={1} paddingBottom={2}>
          {data?.article.tagList.map((tag) => <Chip label={tag} key={tag} variant="outlined" />)}
        </Stack>
        {data?.article.author.username === auth.user?.username && (
          <>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={() => navigate(`/editor/${data?.article.slug}`)}>Edit</Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default PreviewArticle;
