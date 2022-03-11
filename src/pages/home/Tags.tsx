import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchTagsAsync, tagsSelector } from 'store/tags/tagsSlice';

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags, status } = useAppSelector(tagsSelector);

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, []);

  if (status === 'idle') {
    return (
      <div className="tag-list">
        {tags.map((tag) => {
          return (
            <a className="tag-default tag-pill" key={tag}>
              {tag}
            </a>
          );
        })}
      </div>
    );
  }

  return <div>Loading Tags...</div>;
};

export default Tags;
