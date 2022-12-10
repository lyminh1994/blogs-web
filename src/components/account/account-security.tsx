import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material';

function AccountSecurity() {
  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Update Password" />
        <CardContent>
          <Grid container>
            <Grid item md={12} xs={12}>
              <TextField
                margin="dense"
                id="name"
                label="Old Password"
                type="oldPassword"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                margin="dense"
                id="name"
                label="New Password"
                type="newPassword"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                margin="dense"
                id="name"
                label="Confirm Password"
                type="confirmPassword"
                fullWidth
                required
                variant="outlined"
              />
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
          <Button color="primary" variant="contained">
            Update
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AccountSecurity;
