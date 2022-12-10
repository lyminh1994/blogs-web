import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Typography,
  TextField,
} from '@mui/material';

const schema = yup
  .object({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
  })
  .required();

const Editor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ oldPassword: string; newPassword: string }>({ resolver: yupResolver(schema) });

  const handleUpdatePassword = (event: { oldPassword: string; newPassword: string }) => {
    console.log(event);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Settings
        </Typography>
        <form onSubmit={handleSubmit(handleUpdatePassword)}>
          <Card>
            <CardHeader subheader="Update password" title="Password" />
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                error={!!errors.oldPassword}
                helperText={errors.oldPassword?.message}
                {...register('oldPassword')}
              />
              <TextField
                fullWidth
                label="Confirm password"
                margin="normal"
                type="password"
                variant="outlined"
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message}
                {...register('newPassword')}
              />
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button color="primary" variant="contained">
                Update
              </Button>
            </Box>
          </Card>
        </form>
      </Container>
    </Box>
  );
};

export default Editor;
