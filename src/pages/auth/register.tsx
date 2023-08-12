import { useSnackbar } from 'notistack';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { faker } from '@faker-js/faker';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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

import { useRegisterMutation } from 'redux/services/api';
import type { RegisterRequest } from 'types/app';
import { useAuth } from 'hooks/useAuth';

const schema = yup
  .object({
    username: yup.string().required().min(3).max(50),
    password: yup.string().required().min(8),
    email: yup.string().required().email(),
  })
  .required();

const Register = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [registerMutation, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<RegisterRequest>({
    defaultValues: {
      username: faker.internet.userName().toLowerCase(),
      email: faker.internet.email().toLowerCase(),
      password: 'd!Y!MrYmVAama26',
      isAllowEmails: false,
    },
    resolver: yupResolver(schema),
  });

  const handleRegister = handleSubmit(async (values) => {
    try {
      await registerMutation(values).unwrap();
      navigate('/login');
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
        onSubmit={handleRegister}
        noValidate
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="Username"
          error={touchedFields.username && !!errors.username}
          helperText={touchedFields.username && errors.username?.message}
          {...register('username')}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          error={touchedFields.email && !!errors.email}
          helperText={touchedFields.email && errors.email?.message}
          {...register('email')}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          error={touchedFields.password && !!errors.password}
          helperText={touchedFields.password && errors.password?.message}
          {...register('password')}
        />

        <FormControlLabel
          control={<Checkbox color="primary" {...register('isAllowEmails')} />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          type="submit"
          variant="contained"
          disabled={isLoading && isSubmitting}
        >
          Register
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography variant="body2">
              {`Have an account? `}
              <Link component={RouterLink} to="/login" variant="body2">
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
