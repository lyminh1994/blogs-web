import { Box } from '@mui/material';
import { MarkdownToJSX } from 'markdown-to-jsx';

interface MarkdownItemProps {
  children: string;
  options?: MarkdownToJSX.Options;
}

const MarkdownItem = (props: MarkdownItemProps) => {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};

export default MarkdownItem;
