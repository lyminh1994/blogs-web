import { Navigate, Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Grid, TextField, Typography, Link, Container } from '@mui/material';

import { useAuth } from 'hooks/useAuth';

const schema = yup
  .object({
    email: yup.string().required().email(),
  })
  .required();

const ForgotPassword = () => {
  const { isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onResetPassword = ({ email }: { email: string }) => {
    console.log(email);
  };

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        component="form"
        onSubmit={handleSubmit(onResetPassword)}
        noValidate
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          error={touchedFields.email && !!errors.email}
          helperText={touchedFields.email && errors.email?.message}
          {...register('email')}
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          Reset
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">
              Login
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
