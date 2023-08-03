import { Chip, Grid, Stack } from '@mui/material';

const Tags = ({ tags }: { tags?: string[] }) => (
  <Grid container sx={{ py: 2 }}>
    <Grid item>
      <Stack direction="row" spacing={1} paddingBottom={2}>
        {tags?.map((name) => <Chip label={name} key={name} variant="outlined" />)}
      </Stack>
    </Grid>
  </Grid>
);

export default Tags;
