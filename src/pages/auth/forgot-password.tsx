import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Grid, TextField, Typography, Link, Container } from '@mui/material';

const ForgotPassword = () => {
  const schema = Yup.object({
    email: Yup.string().required().email(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors },
  } = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onResetPassword = ({ email }: { email: string }) => {
    console.log(email);
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
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onResetPassword)} noValidate>
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            error={touchedFields.email && !!errors.email}
            helperText={touchedFields.email && errors.email?.message}
            {...register('email')}
          />
          <Button sx={{ mt: 3, mb: 2 }} fullWidth type="submit" variant="contained">
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
      </Box>
    </Container>
  );
};

export default ForgotPassword;
