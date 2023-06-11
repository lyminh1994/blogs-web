import { Grid, Pagination, PaginationItem } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import BannerAds from 'components/articles/banner-ads';
import RecentArticles from 'components/articles/recent';

export interface Article {
  title: string;
  date: string;
  description: string;
  image: string;
  imageLabel: string;
}

const articles: Article[] = [
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

const Home = () => (
  <>
    <BannerAds />

    <RecentArticles articles={articles} />

    <Grid container justifyContent="flex-end">
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: KeyboardArrowLeftIcon,
              next: KeyboardArrowRightIcon,
            }}
            {...item}
          />
        )}
      />
    </Grid>
  </>
);
export default Home;
