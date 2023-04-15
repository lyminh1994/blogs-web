import { Controller, useForm } from 'react-hook-form';
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
  Container,
  Divider,
  TextField,
} from '@mui/material';
import type { CreateArticleParams } from 'types/app';

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    body: yup.string().required(),
  })
  .required();

const Editor = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticleParams>({
    resolver: yupResolver(schema),
    defaultValues: { tagNames: [] },
  });
  const handleCreateArticle = (event: CreateArticleParams) => {
    console.log(event);
  };
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      {' '}
      <Container maxWidth="lg">
        {' '}
        <form onSubmit={handleSubmit(handleCreateArticle)}>
          {' '}
          <Card>
            {' '}
            <CardHeader subheader="Create your own article" title="New Article" />{' '}
            <CardContent>
              {' '}
              <TextField
                fullWidth
                label="Title"
                placeholder="Article title"
                margin="normal"
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title?.message}
                {...register('title')}
              />{' '}
              <TextField
                fullWidth
                label="Description"
                placeholder="What's this article about?"
                margin="normal"
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description?.message}
                {...register('description')}
              />{' '}
              <TextField
                multiline
                rows={4}
                fullWidth
                label="Body"
                placeholder="Write your article (in markdown)"
                margin="normal"
                variant="outlined"
                error={!!errors.body}
                helperText={errors.body?.message}
                {...register('body')}
              />{' '}
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
              />{' '}
            </CardContent>{' '}
            <Divider />{' '}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              {' '}
              <Button type="submit" color="primary" variant="contained">
                {' '}
                Create{' '}
              </Button>{' '}
            </Box>{' '}
          </Card>{' '}
        </form>{' '}
      </Container>{' '}
    </Box>
  );
};
export default Editor;
