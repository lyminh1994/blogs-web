import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import UserCircleIcon from 'icons/UserCircle';

import AccountPopover from 'components/account/popover';
import { useAccount } from 'hooks/account';
import { useAuth } from 'hooks/auth';
import { Container } from '@mui/system';

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
  const { isAuthenticated } = useAuth();
  const { account } = useAccount();
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  return (
    <>
      <AppHeaderRoot>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
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
            {isAuthenticated ? (
              <Avatar
                onClick={() => setOpenAccountPopover(true)}
                ref={settingsRef}
                sx={{
                  cursor: 'pointer',
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src={account?.profileImage || 'https://i.pravatar.cc/100'}
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
            ) : (
              <Typography
                component={RouterLink}
                to="/sign-in"
                variant="body2"
                sx={{ p: 1, textDecoration: 'none' }}
              >
                Sign in
              </Typography>
            )}
          </Toolbar>
        </Container>
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
