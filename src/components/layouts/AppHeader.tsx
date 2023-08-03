import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AuthHeader from 'components/layouts/AuthHeader';
import AnonymousHeader from './AnonymousHeader';

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const AppHeader = ({
  sections,
  title,
  isAuthenticated,
}: {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
  isAuthenticated: boolean;
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
        {isAuthenticated ? <AuthHeader /> : <AnonymousHeader />}
      </Toolbar>
    </Container>
  </Header>
);


export default AppHeader;
