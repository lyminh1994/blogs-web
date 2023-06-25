import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';
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
  { title: 'New Article', url: '/article' },
  { title: 'Your Articles', url: '/articles' },
];

const AppLayout = () => {
  const { isAuthenticator } = useAuth();
  return (
    <React.Fragment>
      <AppHeader
        title="A Little Code"
        sections={isAuthenticator ? privateSections : publicSections}
        isAuthenticator={isAuthenticator}
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
    </React.Fragment>
  );
};

export default AppLayout;
