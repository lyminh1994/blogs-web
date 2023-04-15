import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSnackbar } from 'notistack';

import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardActions,
  Button,
} from '@mui/material';

import { useGetUserQuery, useUpdateUserInfoMutation } from 'redux/services/user';
import type { UpdateUserParams } from 'types/app';

const UserGeneral = () => {
  const { data } = useGetUserQuery();
  const [updateInfo, { isLoading: isUpdating }] = useUpdateUserInfoMutation();
  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.string().required(),
    birthday: Yup.string().required(),
    gender: Yup.string().required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<UpdateUserParams>({
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      phone: data?.phone,
      birthday: data?.birthday,
      gender: data?.gender,
    },
    resolver: yupResolver(schema),
  });

  const onUpdate = async (params: UpdateUserParams) =>
    updateInfo(params)
      .then((result) => {
        enqueueSnackbar(JSON.stringify(result, null, 2), {
          variant: 'success',
        });
      })
      .catch((error) => {
        enqueueSnackbar(JSON.stringify(error, null, 2), {
          variant: 'error',
        });
      });

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onUpdate)} noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                required
                variant="outlined"
                error={Boolean(touchedFields.firstName && errors.firstName)}
                helperText={touchedFields.firstName && errors.firstName?.message}
                {...register('firstName')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                required
                variant="outlined"
                error={Boolean(touchedFields.lastName && errors.lastName)}
                helperText={touchedFields.lastName && errors.lastName?.message}
                {...register('lastName')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                required
                variant="outlined"
                error={Boolean(touchedFields.email && errors.email)}
                helperText={touchedFields.email && errors.email?.message}
                {...register('email')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                required
                variant="outlined"
                error={Boolean(touchedFields.phone && errors.phone)}
                helperText={touchedFields.phone && errors.phone?.message}
                {...register('phone')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birthday"
                required
                variant="outlined"
                error={Boolean(touchedFields.birthday && errors.birthday)}
                helperText={touchedFields.birthday && errors.birthday?.message}
                {...register('birthday')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  label="Gender"
                  required
                  variant="outlined"
                  {...register('gender')}
                >
                  <MenuItem value="MALE">Male</MenuItem>
                  <MenuItem value="FEMALE">Female</MenuItem>
                  <MenuItem value="OTHER">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
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
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting && isUpdating}
          >
            Update profile
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default UserGeneral;
