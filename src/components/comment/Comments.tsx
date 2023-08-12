import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

import EditorComment from './EditorComment';
import { useGetCommentsQuery, useRemoveCommentMutation } from 'redux/services/comment';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { slug } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useGetCommentsQuery({ slug, page: 0, size: 10 });
  const [remove] = useRemoveCommentMutation();

  const handleRemove = async (id: string) => {
    try {
      await remove({ slug: slug || '', id }).unwrap();
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), { variant: 'error' });
    }
  };

  return isLoading ? (
    <Typography variant="body1" alignItems="center">
      Loading...
    </Typography>
  ) : (
    <>
      <EditorComment slug={slug} />

      {data?.contents.map((content) => (
        <Card sx={{ mt: 3 }} key={content.id}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" src={content.user.profileImage}>
                R
              </Avatar>
            }
            title={content.user.fullName}
            subheader={content.createdAt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content.body}
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
            <Button size="small" variant="text" onClick={() => handleRemove(content.id)}>
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Comments;
