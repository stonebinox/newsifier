import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { getArticle, getArticles } from '../../services/api';
import { ArticleType } from '../../services/types';
import { Article } from '../article/article';
import { LoadingText, ArticlesContainer } from '../article/article.styles';
import { ArticlePage } from '../article-page/article-page';

const ArticlesTitle = styled.h3`
  color: #ffa500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 24px;
`;

const LoadMore = styled.div`
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  color: #ffa500;
`;

export const Articles = () => {
  const [articles, setArticles] = useState([] as ArticleType[]);
  const [loading, setLoading] = useState(true);
  const [articleView, setArticleView] = useState(null);
  const [articleViewLoading, setArticleViewLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hideLoadMore, setHideLoadMore] = useState(false);

  const goBack = () => {
    setArticleView(null);
    setArticleViewLoading(false);
  }

  const loadArticles = () => {
    getArticles(page).then(response => response.json()).then(data => {
      setLoading(false);
      const { data: articlesData } = data;
      const allArticles = articles.concat(articlesData);
      setArticles(allArticles);

      if (articlesData.length >= 15) {
        setPage(page + 1);
      } else {
        setHideLoadMore(true);
      }
    });
  };

  const loadMore = () => {
    loadArticles();
  };

  const loadArticle = (article: ArticleType) => {
    const { id, content } = article;
    setArticleViewLoading(true);
    
    if (!content) {
      console.log('loading from api');
      getArticle(id).then(response => response.json()).then(data => {
        const { data: articleData } = data;
        setArticleViewLoading(false);
        
        const articlesCopy = articles.slice();
        const targetArticle = articles.find((article) => article.id === id);
        const articleIndex = articles.findIndex((article) => article.id === id);
        let finalArticle;

        if (targetArticle) {
          finalArticle = {
            ...targetArticle,
            content: articleData.content,
          };
          articlesCopy[articleIndex] = finalArticle;
        } else {
          finalArticle = articleData;
          articlesCopy.push(finalArticle);
        }

        setArticles(articlesCopy);
        setArticleView(finalArticle);
      });
    } else {
      console.log('loaded from cache');
      setArticleView(article as any);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ArticlesContainer>
      <Switch>
        <Route path="/article">
          <ArticlePage article={articleView} goBack={goBack} />
        </Route>
        <Route path="/">
          {!articleViewLoading && !articleView && (
            <>
              <ArticlesTitle>Top News</ArticlesTitle>
              {loading && (<LoadingText>Loading news ...</LoadingText>)}
              {!loading && articles.length === 0 && <LoadingText>Nothing more to read.</LoadingText>}
              {articles.length > 0 && articles.map((article, index) => <Article article={article} loadArticle={() => loadArticle(article)} key={index} />)}
              {articles.length > 0 && !hideLoadMore && (<LoadMore onClick={loadMore}>Load more</LoadMore>)}
            </>
          )}
        </Route>
      </Switch>
    </ArticlesContainer>
  );
};