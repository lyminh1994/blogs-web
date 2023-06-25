import { Link, Typography } from '@mui/material';
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';

import MarkdownItem from 'components/MarkdownItem';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownItem,
    },
  },
};

const Markdown = (props: { children: string; options?: MarkdownToJSX.Options }) => {
  return <ReactMarkdown options={options} {...props} />;
};

export default Markdown;
