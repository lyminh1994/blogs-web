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

import { useUpdatePasswordMutation } from 'redux/services/user';
import type { UpdatePasswordRequest } from 'types/app';

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

const ProfileSecurity = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<UpdatePasswordRequest>({
    defaultValues: {
      currentPassword: 'd!Y!MrYmVAama26',
      newPassword: 'd!Y!MrYmVAama26',
      confirmPassword: 'd!Y!MrYmVAama26',
    },
    resolver: yupResolver(schema),
  });

  const handleUpdatePassword = handleSubmit(async (body) => {
    try {
      await updatePassword(body).unwrap();
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error, null, 2), {
        variant: 'error',
      });
    }
  });

  return (
    <Box component="form" onSubmit={handleUpdatePassword} noValidate>
      <Card>
        <CardHeader
          subheader="Changing your password will invalidate all of your browser sessions and require you to Login again."
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
                error={Boolean(touchedFields.currentPassword && errors.currentPassword)}
                helperText={touchedFields.currentPassword && errors.currentPassword?.message}
                {...register('currentPassword')}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                label="New password"
                type="password"
                fullWidth
                variant="outlined"
                error={Boolean(touchedFields.newPassword && errors.newPassword)}
                helperText={touchedFields.newPassword && errors.newPassword?.message}
                {...register('newPassword')}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                label="Confirm new password"
                type="password"
                fullWidth
                variant="outlined"
                error={Boolean(touchedFields.confirmPassword && errors.confirmPassword)}
                helperText={touchedFields.confirmPassword && errors.confirmPassword?.message}
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
            disabled={isSubmitting && isLoading}
          >
            Change password
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProfileSecurity;
