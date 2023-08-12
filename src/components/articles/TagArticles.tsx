import { ChangeEvent, useState } from 'react';

import { useGetArticlesQuery } from 'redux/services/article';

import Articles from './Articles';

const TagArticles = ({ tag }: { tag: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery({
    tag: tag,
    page: currentPage - 1,
    size: 10,
  });

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return isLoading && !data ? (
    <p>No articles are here... yet.</p>
  ) : (
    <Articles
      articles={data?.contents}
      total={data?.totalElements}
      currentPage={currentPage}
      onChange={handleChangePage}
    />
  );
};

export default TagArticles;
