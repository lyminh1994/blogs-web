import { useSnackbar } from 'notistack';

import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  Box,
  FormHelperText,
} from '@mui/material';

import { useGetUserQuery, useUpdateUserInfoMutation } from 'redux/services/user';
import type { UpdateUserRequest } from 'types/app';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    birthday: yup.string().required(),
    gender: yup.string().required(),
  })
  .required();

const AccountGeneral = () => {
  const { data: user } = useGetUserQuery();
  const [updateInfo, { isLoading: isUpdating }] = useUpdateUserInfoMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<UpdateUserRequest>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      birthday: user?.birthday,
      gender: user?.gender,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UpdateUserRequest) => {
    console.log(data);
    updateInfo(data)
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

export default AccountGeneral;
