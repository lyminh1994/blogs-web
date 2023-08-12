import { useSnackbar } from 'notistack';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

import { useLoginMutation } from 'redux/services/api';
import type { LoginRequest } from 'types/app';
import { useAuth } from 'hooks/useAuth';

const schema = yup
  .object({
    username: yup
      .string()
      .required('Username or email can not empty')
      .test('is-email', 'Invalid email', (value) => {
        if (value) {
          return value.includes('@') ? yup.string().email().isValidSync(value) : true;
        }

        return true;
      }),
    password: yup.string().required('Password can not empty'),
  })
  .required();

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<LoginRequest>({
    defaultValues: { username: 'wilhelm', password: 'd!Y!MrYmVAama26' },
    resolver: yupResolver(schema),
  });

  const [loginMutation, { isLoading }] = useLoginMutation();
  const handleLogin = handleSubmit(async (values) => {
    try {
      await loginMutation(values).unwrap();
      navigate(-1);
    } catch (err) {
      enqueueSnackbar(JSON.stringify(err, null, 2), {
        variant: 'error',
      });
    }
  });

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
        onSubmit={handleLogin}
        noValidate
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="Username"
          type="text"
          error={Boolean(touchedFields.username && errors.username)}
          helperText={touchedFields.username && errors.username?.message}
          {...register('username')}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          error={Boolean(touchedFields.password && errors.password)}
          helperText={touchedFields.password && errors.password?.message}
          {...register('password')}
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting && isLoading}
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <Link component={RouterLink} to="/register">
                Need an account?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
