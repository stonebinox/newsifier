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

export const Articles = () => {
  const [articles, setArticles] = useState([] as ArticleType[]);
  const [loading, setLoading] = useState(true);
  const [articleView, setArticleView] = useState(null);
  const [articleViewLoading, setArticleViewLoading] = useState(false);

  const loadArticles = () => {
    getArticles().then(response => response.json()).then(data => {
      setLoading(false);
      const { data: articles } = data;
      setArticles(articles);
    });
  };

  const loadArticle = (article: ArticleType) => {
    const { id, content } = article;
    setArticleViewLoading(true);
    
    if (!content) {
      getArticle(id).then(response => response.json()).then(data => {
        const { data: articleData } = data;
        setArticleViewLoading(false);
        
        const articlesCopy = articles.slice();
        const targetArticle = articles.find((article) => article.id === id);
        const articleIndex = articles.findIndex((article) => article.id === id);
        let article;

        if (targetArticle) {
          article = {
            ...targetArticle,
            content: articleData.content,
          };
          articlesCopy[articleIndex] = article;
        } else {
          article = articleData;
          articlesCopy.push(article);
        }

        setArticles(articlesCopy);
        setArticleView(article);
      });
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ArticlesContainer>
      <Switch>
        <Route path="/article">
          <ArticlePage article={articleView} />
        </Route>
      </Switch>
      {!articleViewLoading && !articleView && (
        <>
          <ArticlesTitle>Top News</ArticlesTitle>
          {loading && (<LoadingText>Loading news ...</LoadingText>)}
          {!loading && articles.length === 0 && <LoadingText>Nothing more to read.</LoadingText>}
          {articles.length > 0 && articles.map((article, index) => <Article article={article} loadArticle={() => loadArticle(article)} key={index} />)}
        </>
      )}
    </ArticlesContainer>
  );
};