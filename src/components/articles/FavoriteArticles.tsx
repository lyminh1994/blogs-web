import { ChangeEvent, useState } from 'react';

import { useAuth } from 'hooks/useAuth';

import { useGetArticlesQuery } from 'redux/services/article';
import Articles from './Articles';

const FavoriteArticles = () => {
  const {
    auth: { user },
  } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    limit: 10,
    offset: currentPage - 1,
    favorited: user?.username,
  });

  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading && !data ? (
        <p>No articles are here... yet.</p>
      ) : (
        <Articles
          articles={data?.articles}
          total={data?.articlesCount}
          currentPage={currentPage}
          onChange={handleChangePage}
        />
      )}
    </>
  );
};

export default FavoriteArticles;
