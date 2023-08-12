import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  TextField,
} from '@mui/material';

import { useCreateArticleMutation } from 'redux/services/article';

import type { CreateArticleRequest } from 'types/app';

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    body: yup.string().required(),
  })
  .required();

const ArticleCreate = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [create] = useCreateArticleMutation();

  const {
    control,
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<CreateArticleRequest>({
    resolver: yupResolver(schema),
  });

  const handleCreate = handleSubmit(async (values) => {
    try {
      await create(values).unwrap();
      navigate('/articles');
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), { variant: 'error' });
    }
  });

  return (
    <Box component="form" onSubmit={handleCreate} noValidate>
      <Card>
        <CardHeader title="New Article" subheader="Create your own article" />
        <CardContent>
          <TextField
            fullWidth
            label="Title"
            placeholder="Article title"
            margin="normal"
            variant="outlined"
            error={Boolean(touchedFields.title && errors.title)}
            helperText={touchedFields.title && errors.title?.message}
            {...register('title')}
          />
          <TextField
            fullWidth
            label="Description"
            placeholder="What's this article about?"
            margin="normal"
            variant="outlined"
            error={Boolean(touchedFields.description && errors.description)}
            helperText={touchedFields.description && errors.description?.message}
            {...register('description')}
          />
          <TextField
            multiline
            rows={4}
            fullWidth
            label="Body"
            placeholder="Write your article (in markdown)"
            margin="normal"
            variant="outlined"
            error={Boolean(touchedFields.body && errors.body)}
            helperText={touchedFields.body && errors.body?.message}
            {...register('body')}
          />
          <Controller
            name="tagNames"
            control={control}
            render={({ field: { onChange, ref, ...field } }) => (
              <Autocomplete
                {...field}
                ref={ref}
                multiple
                freeSolo
                options={[]}
                onChange={(_, value) => onChange(value)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Tags"
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            )}
          />
        </CardContent>

        <Divider />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
            Publish Article
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
export default ArticleCreate;
