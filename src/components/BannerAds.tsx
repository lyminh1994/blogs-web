import { Box, Button, Grid, Paper, Typography } from '@mui/material';

import { faker } from '@faker-js/faker';

const BannerAds = () => (
  <Paper
    sx={{
      position: 'relative',
      color: '#fff',
      mb: 4,
      backgroundColor: 'grey.800',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${faker.image.url()})`,
    }}
  >
    {<img style={{ display: 'none' }} src={faker.image.url()} alt={faker.image.url()} />}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    />
    <Grid container>
      <Grid item md={8}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit">
            Reflectoring
          </Typography>
          <Typography component="h1" variant="h4" color="inherit">
            Where the HOW meets the WHY.
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Software development tutorials, thoughts about the software craft, and tips on how to
            grow as a software engineer.
          </Typography>
          <Box>
            <Button sx={{ mr: 2 }} variant="contained" color="secondary">
              Join the Newsletter
            </Button>
            <Button variant="contained" color="secondary">
              Browse the Articles
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

export default BannerAds;
