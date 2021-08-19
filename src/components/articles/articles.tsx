import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getArticles } from '../../services/api';

const ArticlesContainer = styled.div`
  width: 90%;
  padding: 8px;
  margin: 0 auto;
  margin-top: 16px;
`;

const ArticlesTitle = styled.h3`
  color: #ffa500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 24px;
`;

const LoadingText = styled.span`
  color: #666;
  text-align: left;
  font-size: 12px;
`;

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = () => {
    getArticles().then(response => response.json()).then(data => {
      setLoading(false);
      const { data: articles } = data;
      setArticles(articles);
    });
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ArticlesContainer>
       <ArticlesTitle>Top News</ArticlesTitle>
       {loading && (<LoadingText>Loading articles ...</LoadingText>)}
    </ArticlesContainer>
  );
};