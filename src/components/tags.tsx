import { Grid, Link, Typography } from '@mui/material';

import { useGetTagsQuery } from 'redux/services/tag';

const Tags = () => {
  const { data, error } = useGetTagsQuery(0);

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Popular Tags
      </Typography>
      {error
        ? `there was an error`
        : !data
        ? 'loading'
        : data?.contents.map(({ id, name }) => (
            <Link display="block" variant="body1" href="#" key={id} underline="none">
              {name}
            </Link>
          ))}
    </Grid>
  );
};

export default Tags;
