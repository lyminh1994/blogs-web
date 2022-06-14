import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { User } from 'types/auth';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
  user: User | null;
}

const Header = ({ sections, title, user }: HeaderProps) => {
  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component={RouterLink}
          to="/home"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1, textDecoration: 'none' }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {user ? (
          <Avatar src={user.image} component={RouterLink} to="/user1" sizes="small" />
        ) : (
          <Stack direction="row" spacing={0.5} justifyContent="center">
            <Button component={RouterLink} to="/login" variant="outlined" size="small">
              Sign in
            </Button>
            <Button component={RouterLink} to="/register" variant="outlined" size="small">
              Sign up
            </Button>
          </Stack>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            component={RouterLink}
            to={section.url}
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Fragment>
  );
};

export default Header;
