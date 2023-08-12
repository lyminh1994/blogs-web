import { useSnackbar } from 'notistack';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { useAuth } from 'hooks/useAuth';
import { useUpdateUserMutation } from 'redux/services/user';

import type { UpdateUserRequest } from 'types/app';

const schema = yup
  .object({
    email: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    birthday: yup.string().required(),
  })
  .required();

const AccountGeneral = () => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserRequest>({
    defaultValues: {
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      birthday: user?.birthday,
      gender: user?.gender,
    },
    resolver: yupResolver(schema),
  });

  const handleUpdateUser = handleSubmit(async (value) => {
    try {
      await updateUser(value).unwrap();
      enqueueSnackbar('Update profile successful!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), {
        variant: 'error',
      });
    }
  });

  return (
    <Box component="form" onSubmit={handleUpdateUser} noValidate>
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
                label="First Name"
                required
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                {...register('firstName')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                required
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                required
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register('phone')}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birthday"
                required
                variant="outlined"
                error={!!errors.birthday}
                helperText={errors.birthday?.message}
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
                {errors.gender && <FormHelperText error>{'errors.gender?.message'}</FormHelperText>}
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
            disabled={isSubmitting && isLoading}
          >
            Update profile
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AccountGeneral;
