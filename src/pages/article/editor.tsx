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
import type { CreateArticleRequest } from 'types/app';
import {
  useCreateArticleMutation,
  useGetArticleQuery,
  useUpdateArticleMutation,
} from 'redux/services/article';
import { useNavigate, useParams } from 'react-router-dom';

import { faker } from '@faker-js/faker';

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    body: yup.string().required(),
  })
  .required();

const ArticleEditor = () => {
  const { slug } = useParams();
  const { data, isSuccess: isGetSuccess, refetch } = useGetArticleQuery(slug || '');

  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<CreateArticleRequest>({
    defaultValues: {
      title: isGetSuccess ? data?.article.title : faker.location.country(),
      description: isGetSuccess ? data?.article.description : faker.lorem.lines(),
      body: isGetSuccess ? data?.article.body : faker.lorem.paragraphs(),
      tagList: isGetSuccess
        ? data?.article.tagList
        : faker.helpers.arrayElements(['cat', 'dog', 'mouse'], { min: 1, max: 3 }),
    },
    resolver: yupResolver(schema),
  });
  const [createMutation, { isLoading, isSuccess }] = useCreateArticleMutation();
  const [updateMutation, { isSuccess: isUpdateSuccess }] = useUpdateArticleMutation();

  const handleCreateArticle = async (body: CreateArticleRequest) => {
    if (!slug) {
      const response1 = await createMutation(body).unwrap();
      if (response1 && isSuccess) {
        navigate(`/article/${response1.slug}`);
      }
    } else {
      await updateMutation({ slug, ...body });
      if (isUpdateSuccess) {
        refetch();
        navigate(`/article/${slug}`);
      }
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(handleCreateArticle)} noValidate>
          <Card>
            <CardHeader subheader="Create your own article" title="New Article" />
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
                name="tagList"
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
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting && isLoading}
              >
                Publish Article
              </Button>
            </Box>
          </Card>
        </form>
      </Container>
    </Box>
  );
};
export default ArticleEditor;
