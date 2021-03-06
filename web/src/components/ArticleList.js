import React from 'react';
import ArticlePreview from './ArticlePreview';
const ArticleList = props => {
  console.log("RENDER ARTICLES", props)
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map((article, i) => {
          console.log(i)
          return (
            <ArticlePreview key={i} article={article} />
          );
        })
      }
    </div>
  );
};

export default ArticleList;
