import { Box, Container, Divider, IconButton, Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StackOverflow from 'icons/stack-overflow';

import Copyright from 'components/copyright';

const AppFooter = () => {
  return (
    <Container component="footer">
      <Divider />
      <Box
        sx={{
          py: 4,
          display: { xs: 'block', sm: 'flex' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
        }}
      >
        <Copyright />
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction="row">
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/questions/tagged/mui"
              aria-label="Stack Overflow"
              title="Stack Overflow"
              size="small"
            >
              <StackOverflow fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/MUI_hq"
              aria-label="twitter"
              title="Twitter"
              size="small"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/mui/"
              aria-label="linkedin"
              title="LinkedIn"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCUdh2wVTrd7hErLo9Rh0HsQ"
              aria-label="YouTube"
              title="YouTube"
              size="small"
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default AppFooter;
