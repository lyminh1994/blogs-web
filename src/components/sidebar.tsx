import { Grid, Link, Paper, Typography } from '@mui/material';
import Tags from 'components/tags';

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  title: string;
}

const Sidebar = ({ archives, description, title }: SidebarProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Tags />
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
