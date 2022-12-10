import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useAuth } from 'hooks/auth';
import { useSignUpMutation } from 'redux/services/auth';

import type { SignUpRequest } from 'types/app';

const schema = yup
  .object({
    username: yup.string().required().min(3).max(50),
    password: yup
      .string()
      .required()
      .min(4)
      .matches(/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/),
    email: yup.string().required().email(),
  })
  .required();

const SignUp = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequest>({ resolver: yupResolver(schema) });

  const handleSignUp = async (params: SignUpRequest) => {
    try {
      await signUp(params);
      navigate('/sign-in');
    } catch (err) {
      enqueueSnackbar('Oh no, there was an error!', {
        autoHideDuration: 1000,
        variant: 'error',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      });
    }
  };

  return user ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleSignUp)} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Username"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...register('username')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
