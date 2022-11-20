import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Link, Stack, Toolbar, Typography } from '@mui/material';

import { UserResponse } from 'types/user';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
  user?: UserResponse | null;
}

const Header = ({ sections, title, user }: HeaderProps) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component={RouterLink}
          to="/"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1, textDecoration: 'none' }}
        >
          {title}
        </Typography>
        {user ? (
          <Avatar
            src={user.profileImage || 'https://i.pravatar.cc/100'}
            component={RouterLink}
            to={user.publicId}
            sizes="small"
          />
        ) : (
          <Stack direction="row" spacing={0.5} justifyContent="center">
            <Button component={RouterLink} to="/signin" variant="outlined" size="small">
              Sign in
            </Button>
            <Button component={RouterLink} to="/signup" variant="outlined" size="small">
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
    </>
  );
};

export default Header;
