import { Chip, Divider, Grid, Stack, Typography } from '@mui/material';

import { useGetTagsQuery } from 'redux/services/tag';

const Tags = () => {
  const { data, isLoading } = useGetTagsQuery({ page: 0, size: 10 });

  return (
    <Grid item>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Popular Tags
      </Typography>

      <Divider />

      {isLoading && !data ? (
        <Typography variant="body1" alignItems="center">
          No tags are here... yet.
        </Typography>
      ) : (
        <Grid container sx={{ py: 2 }}>
          <Grid item>
            <Stack direction="row" spacing={1} paddingBottom={2}>
              {data?.contents.map((tag) => (
                <Chip label={tag.name} key={tag.id} variant="outlined" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Tags;
