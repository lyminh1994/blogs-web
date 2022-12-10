import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Badge, Button, Stack, styled, Toolbar, Typography } from '@mui/material';

import UserCircleIcon from 'icons/user-circle';

import AccountPopover from 'components/account-popover';
import { useAuth } from 'hooks/auth';

const AppHeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

interface AppHeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const AppHeader = ({ sections, title }: AppHeaderProps) => {
  const { user } = useAuth();
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  return (
    <>
      <AppHeaderRoot>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            px: 2,
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            variant="h5"
            align="left"
            noWrap
            sx={{ flex: 1, textDecoration: 'none' }}
          >
            {title}
          </Typography>
          {sections.map((section) => (
            <Typography
              component={RouterLink}
              to={section.url}
              key={section.title}
              variant="body2"
              sx={{ p: 1, textDecoration: 'none' }}
            >
              {section.title}
            </Typography>
          ))}
          {user ? (
            <Badge badgeContent={4} color="success" variant="dot">
              <Avatar
                onClick={() => setOpenAccountPopover(true)}
                ref={settingsRef}
                sx={{
                  cursor: 'pointer',
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src={user.profileImage || 'https://i.pravatar.cc/100'}
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
            </Badge>
          ) : (
            <Stack direction="row" spacing={0.5} justifyContent="center">
              <Button component={RouterLink} to="/sign-in" variant="outlined" size="small">
                Sign in
              </Button>
              <Button component={RouterLink} to="/sign-up" variant="outlined" size="small">
                Sign up
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppHeaderRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

export default AppHeader;
