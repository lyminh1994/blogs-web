import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardActions,
  Button,
} from '@mui/material';

import { AccountResponse } from 'types/app';

interface AccountGeneralProps {
  user?: AccountResponse | null;
}

const AccountGeneral = ({ user }: AccountGeneralProps) => (
  <form autoComplete="off" noValidate>
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="First name"
              name="firstName"
              value={user?.firstName}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              value={user?.lastName}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={user?.email}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={user?.phone}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Birthday"
              name="birthday"
              value={user?.birthday}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                label="Gender"
                name="gender"
                value={user?.gender}
                required
                variant="outlined"
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="OTHER">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button variant="contained" color="primary">
          Update profile
        </Button>
      </CardActions>
    </Card>
  </form>
);

export default AccountGeneral;
