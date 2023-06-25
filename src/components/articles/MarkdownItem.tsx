import { Box } from '@mui/material';
import { MarkdownToJSX } from 'markdown-to-jsx';

const MarkdownItem = (props: { children: string; options?: MarkdownToJSX.Options }) => {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};

export default MarkdownItem;
