import React from 'react';
import { Box } from '@mui/material';

const MarkdownListItem = (props: any) => {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};

export default MarkdownListItem;
