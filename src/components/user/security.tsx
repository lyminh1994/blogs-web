import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSnackbar } from 'notistack';

import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material';

import { useUpdatePasswordMutation } from 'redux/services/user';
import { useSignOutMutation } from 'redux/services/auth';
import type { UpdatePasswordParams } from 'types/app';

const schema = yup
  .object({
    currentPassword: yup.string().required('Old password is required'),
    newPassword: yup.string().required('New password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('newPassword')], 'Confirm password must match New password'),
  })
  .required();

const UserSecurity = () => {
  const navigate = useNavigate();
  const [updatePassword, { isLoading: isUpdatePasswordLoading }] = useUpdatePasswordMutation();
  const [signOut, { isLoading: isSignOutLoading }] = useSignOutMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordParams>({
    resolver: yupResolver(schema),
  });

  const handleUpdatePassword = async (params: UpdatePasswordParams) => {
    try {
      await updatePassword(params).unwrap();
      await signOut().unwrap();

      if (!isSignOutLoading) {
        navigate('/sign-in');
        enqueueSnackbar('Update password success!', { variant: 'success' });
      }
    } catch (err) {
      enqueueSnackbar('Oh no, there was an error!', {
        variant: 'error',
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(handleUpdatePassword)}>
      <Card>
        <CardHeader
          subheader="Changing your password will invalidate all of your browser sessions and require you to sign in again."
          title="Password"
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                label="Current password"
                type="password"
                fullWidth
                variant="outlined"
                error={!!errors.currentPassword}
                helperText={errors.currentPassword?.message}
                {...register('currentPassword')}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                label="New password"
                type="password"
                fullWidth
                variant="outlined"
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message}
                {...register('newPassword')}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                label="Confirm new password"
                type="password"
                fullWidth
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                {...register('confirmPassword')}
              />
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
            color="primary"
            variant="contained"
            disabled={isUpdatePasswordLoading}
          >
            Change password
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default UserSecurity;
