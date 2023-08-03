import { useSnackbar } from 'notistack';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useSaveMutation } from 'redux/services/api';
import type { UpdateUserRequest } from 'types/app';

const schema = yup
  .object({
    email: yup.string().required(),
    username: yup.string().required(),
    image: yup.string().required(),
    bio: yup.string().required(),
  })
  .required();

const ProfileGeneral = () => {
  const {
    auth: { user },
  } = useAuth();
  const [updateInfo, { isLoading: isUpdating }] = useSaveMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserRequest>({
    defaultValues: {
      email: user?.email,
      username: user?.username,
      image: user?.image,
      bio: user?.bio,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UpdateUserRequest) => {
    console.log(data);
    updateInfo(data)
      .then(() => {
        enqueueSnackbar('Update profile successful!', {
          variant: 'success',
        });
      })
      .catch((error) => {
        enqueueSnackbar(JSON.stringify(error, null, 2), {
          variant: 'error',
        });
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                required
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Username"
                required
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...register('username')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Image"
                required
                variant="outlined"
                error={!!errors.image}
                helperText={errors.image?.message}
                {...register('image')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Bio"
                required
                variant="outlined"
                error={!!errors.bio}
                helperText={errors.bio?.message}
                {...register('bio')}
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="gender-label" required>
                  Gender
                </InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="gender-label"
                      label="Gender"
                      variant="outlined"
                      {...field}
                      onChange={(event) => field.onChange(event.target.value)}
                      value={field.value || ''}
                    >
                      <MenuItem value="MALE">Male</MenuItem>
                      <MenuItem value="FEMALE">Female</MenuItem>
                      <MenuItem value="OTHER">Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.gender && <FormHelperText error>{errors.gender?.message}</FormHelperText>}
              </FormControl>
            </Grid> */}
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting && isUpdating}
          >
            Update profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfileGeneral;
