import { ChangeEvent, useState } from 'react';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from './Articles';

const TagArticles = ({ tag }: { tag: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    limit: 10,
    offset: currentPage - 1,
    tag: tag,
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

export default TagArticles;
