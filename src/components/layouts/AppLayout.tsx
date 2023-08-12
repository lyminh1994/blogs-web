import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AppFooter from 'components/layouts/AppFooter';
import AppHeader from 'components/layouts/AuthenticateHeader';

import { useAuth } from 'hooks/useAuth';

const Layout = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  maxWidth: '100%',
  pt: 64,
}));

const publicSections = [{ title: 'Home', url: '/' }];

const privateSections = [
  { title: 'Home', url: '/' },
  { title: 'New Post', url: '/editor' },
  { title: 'Your Articles', url: '/articles' },
];

const AppLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <AppHeader
        appName="A Little Code"
        sections={isAuthenticated ? privateSections : publicSections}
        isAuthenticated={isAuthenticated}
      />

      <Layout>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Layout>

      <AppFooter />
    </>
  );
};

export default AppLayout;
