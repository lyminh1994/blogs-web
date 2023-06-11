import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AuthHeader from 'components/layouts/auth-header';

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const AppHeader = ({
  sections,
  title,
  isAuthenticator,
}: {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
  isAuthenticator: boolean;
}) => (
  <Header>
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
        {isAuthenticator ? (
          <AuthHeader />
        ) : (
          <>
            <Typography
              component={RouterLink}
              to="/sign-in"
              variant="body2"
              sx={{ p: 1, textDecoration: 'none' }}
            >
              Sign in
            </Typography>
            <Typography
              component={RouterLink}
              to="/sign-up"
              variant="body2"
              sx={{ p: 1, textDecoration: 'none' }}
            >
              Sign up
            </Typography>
          </>
        )}
      </Toolbar>
    </Container>
  </Header>
);


export default AppHeader;
