import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSnackbar } from 'notistack';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

import { useSignInMutation } from 'redux/services/api';
import type { SignInParams } from 'types/app';

const SignIn = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [signIn, { isLoading }] = useSignInMutation();

  const schema = Yup.object({
    username: Yup.string()
      .required('Username or email can not empty')
      .test('is-email', 'Invalid email', (value) => {
        if (value) {
          return value.includes('@') ? Yup.string().email().isValidSync(value) : true;
        }

        return true;
      }),
    password: Yup.string().required('Password can not empty'),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<SignInParams>({
    defaultValues: { username: '', password: '12345678' },
    resolver: yupResolver(schema),
  });

  const onSignIn = async (params: SignInParams) => {
    try {
      await signIn(params).unwrap();
      navigate('/');
    } catch (err) {
      enqueueSnackbar('Invalid username or password!', {
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
              <Typography variant="body2">
                {`Don't have an account? `}
                <Link component={RouterLink} to="/sign-up">
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
