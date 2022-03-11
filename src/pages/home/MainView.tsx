import React from 'react';

import ArticleList from 'pages/article/ArticleList';
import GlobalFeedTab from 'pages/tabs/GlobalFeedTab';
import TagFilterTab from 'pages/tabs/TagFilterTab';
import YourFeedTab from 'pages/tabs/YourFeedTab';

const MainView = () => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab />

          <GlobalFeedTab />

          <TagFilterTab />
        </ul>
      </div>

      <ArticleList />
    </div>
  );
};

export default MainView;
