import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

import { useLoginMutation } from 'redux/services/api';
import type { LoginRequest } from 'types/app';

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
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loginMutation, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<LoginRequest>({
    defaultValues: { username: '', password: 'd!Y!MrYmVAama26' },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      await loginMutation(data).unwrap();
      navigate('/');
    } catch (error) {
      enqueueSnackbar(JSON.stringify(error, null, 2), {
        variant: 'error',
      });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="normal"
            fullWidth
            label="Username or email"
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
                {`Don't have an account? `}
                <Link component={RouterLink} to="/register">
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
