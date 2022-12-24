import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import AppFooter from 'layouts/app-footer';
import AppHeader from 'layouts/app-header';

const LayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  pt: 64,
}));

const sections = [
  { title: 'Home', url: '/' },
  { title: 'New Article', url: '/editor' },
  { title: 'Your Feed', url: '/settings' },
];

const Layout = () => (
  <>
    <AppHeader title="A Little Dev" sections={sections} />

    <LayoutRoot>
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
    </LayoutRoot>

    <AppFooter />
  </>
);


export default Layout;
