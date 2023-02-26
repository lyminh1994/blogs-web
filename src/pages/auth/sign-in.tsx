import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSignInMutation } from 'redux/services/api';
import type { SignInRequest } from 'types/app';

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<SignInRequest>({
    defaultValues: { username: 'galezieme', password: '12345678' },
    resolver: yupResolver(
      Yup.object({
        username: Yup.string()
          .required('Username or email can not empty')
          .test('is-email', 'Invalid email', (value) => {
            if (value) {
              return value.includes('@') ? Yup.string().email().isValidSync(value) : true;
            }

            return true;
          }),
        password: Yup.string().required('Password can not empty'),
      }).required(),
    ),
  });

  const onSignIn = async (signInParams: SignInRequest) => {
    try {
      await signIn(signInParams).unwrap();
      navigate('/');
    } catch (err) {
      enqueueSnackbar('Oh no, there was an error!', {
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSignIn)} noValidate>
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting && isLoading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/sign-up" variant="body2">
                {`Don't have an account? Sign up`}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
