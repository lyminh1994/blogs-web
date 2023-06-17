import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
import type { RegisterParams } from 'types/app';

const Register = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [registerMutation, { isLoading }] = useRegisterMutation();

  const schema = Yup.object({
    username: Yup.string().required().min(3).max(50),
    password: Yup.string().required().min(8),
    email: Yup.string().required().email(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitting },
  } = useForm<RegisterParams>({
    defaultValues: {
      username: '',
      email: '',
      password: 'd!Y!MrYmVAama26',
      isAllowEmails: false,
    },
    resolver: yupResolver(schema),
  });

  const handleRegister = async (params: RegisterParams) => {
    try {
      await registerMutation(params);
      navigate('/login');
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleRegister)}>
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
                {`Already have an account? `}
                <Link component={RouterLink} to="/login" variant="body2">
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;