import { useState } from 'react';
import { TablePagination } from '@mui/material';

import HighlightPost from 'components/posts/highlight';
import FeaturedPosts from 'components/posts/featured';

const highlightPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageLabel: 'main image description',
  date: '',
};

export interface Post {
  title: string;
  date: string;
  description: string;
  image: string;
  imageLabel: string;
}

const posts: Post[] = [
  {
    title: 'Wagon',
    date: 'Fri Oct 07 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/cats',
    imageLabel: 'Image Text',
  },
  {
    title: 'Hatchback',
    date: 'Sat May 07 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/food',
    imageLabel: 'Image Text',
  },
  {
    title: 'Hatchback 1',
    date: 'Wed Dec 22 2021',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/fashion',
    imageLabel: 'Image Text',
  },
  {
    title: 'SUV',
    date: 'Thu Mar 10 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/abstract',
    imageLabel: 'Image Text',
  },
  {
    title: 'SUV 1',
    date: 'Sun Nov 28 2021',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/people',
    imageLabel: 'Image Text',
  },
  {
    title: 'Passenger Van',
    date: 'Tue Sep 07 2021',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/business',
    imageLabel: 'Image Text',
  },
  {
    title: 'Crew Cab Pickup',
    date: 'Sat Jan 28 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/sports',
    imageLabel: 'Image Text',
  },
  {
    title: 'Coupe',
    date: 'Thu Oct 29 2020',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/food',
    imageLabel: 'Image Text',
  },
  {
    title: 'Coupe 1',
    date: 'Mon Feb 22 2016',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/business',
    imageLabel: 'Image Text',
  },
  {
    title: 'Passenger Van 1',
    date: 'Mon Nov 28 2022',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://loremflickr.com/640/480/cats',
    imageLabel: 'Image Text',
  },
];

const Home = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <HighlightPost post={highlightPost} />
      <FeaturedPosts posts={posts} />
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Home;
