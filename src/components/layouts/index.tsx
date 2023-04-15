import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AppFooter from 'components/layouts/app-footer';
import AppHeader from 'components/layouts/app-header';
import { useAuth } from 'hooks/useAuth';

const Layout = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  pt: 64,
}));

const publicSections = [{ title: 'Home', url: '/' }];

const privateSections = [
  { title: 'Home', url: '/' },
  { title: 'New Post', url: '/editor' },
  { title: 'Your Posts', url: '/settings' },
];

const AppLayout = () => {
  const { isAuthenticator } = useAuth();
  return (
    <>
      <AppHeader
        title="A Little Code"
        sections={isAuthenticator ? privateSections : publicSections}
      />

      <Layout>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
          >
            <Container maxWidth="lg">
              <Outlet />
            </Container>
          </Box>
        </Box>
      </Layout>

      <AppFooter />
    </>
  );
};

export default AppLayout;
