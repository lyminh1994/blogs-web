import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  TextField,
} from '@mui/material';
import type { NewArticle } from 'types/app';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    body: yup.string().required(),
    // tagNames: yup.array().required(),
  })
  .required();

const Editor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewArticle>({ resolver: yupResolver(schema) });

  const handleUpdatePassword = (event: NewArticle) => {
    console.log(event);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(handleUpdatePassword)}>
          <Card>
            <CardHeader subheader="Create your own article" title="New Article" />
            <CardContent>
              <TextField
                fullWidth
                label="Title"
                placeholder="Article title"
                margin="normal"
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title?.message}
                {...register('title')}
              />
              <TextField
                fullWidth
                label="Description"
                placeholder="What's this article about?"
                margin="normal"
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description?.message}
                {...register('description')}
              />
              <TextField
                fullWidth
                label="Body"
                placeholder="Write your article (in markdown)"
                margin="normal"
                variant="outlined"
                error={!!errors.body}
                helperText={errors.body?.message}
                {...register('body')}
              />
              <Autocomplete
                multiple
                options={top100Films}
                getOptionLabel={(option) => option.title}
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
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button type="submit" color="primary" variant="contained">
                Create
              </Button>
            </Box>
          </Card>
        </form>
      </Container>
    </Box>
  );
};

export default Editor;
