import { useSnackbar } from 'notistack';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Box, Button, Card, CardContent, Divider, TextField } from '@mui/material';

import { useCreateCommentMutation } from 'redux/services/comment';
import type { CreateCommentRequest } from 'types/app';

import { faker } from '@faker-js/faker';
const schema = yup
  .object({
    body: yup.string().required(),
  })
  .required();

interface EditorCommentProps {
  slug?: string;
}
const EditorComment = ({ slug }: EditorCommentProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [commentMutation] = useCreateCommentMutation();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<CreateCommentRequest>({
    defaultValues: {
      body: faker.lorem.lines(1),
    },
    resolver: yupResolver(schema),
  });

  const handleComment = handleSubmit(async (values) => {
    try {
      await commentMutation({ slug, body: values }).unwrap();
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), { variant: 'error' });
    }
  });

  return (
    <form onSubmit={handleComment} noValidate>
      <Card>
        <CardContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            label="Comment"
            placeholder="Write your comment here"
            margin="normal"
            variant="outlined"
            error={Boolean(touchedFields.body && errors.body)}
            helperText={touchedFields.body && errors.body?.message}
            {...register('body')}
          />
        </CardContent>

        <Divider />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
            Post
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default EditorComment;
