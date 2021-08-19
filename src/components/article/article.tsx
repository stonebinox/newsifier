import React from 'react';

import { ArticleType } from '../../services/types';
import { ArticleResponses } from '../article-responses/article-responses';
import { ArticleContainer, ArticleTitle, ArticleThumbnail, ArticleContent, ArticleDescription, StyledLink } from './article.styles';


interface Props {
  article: ArticleType;
  loadArticle: () => void;
};

export const Article = ({ article, loadArticle }: Props) => {
  const { title, thumbnails: { xsmall_300 }, meta_description = '', claps_count = 0, comments_count = 0, updated_at, views = 0 } = article;

  return (
    <StyledLink to="/article" onClick={loadArticle}>
      <ArticleContainer>
        <ArticleThumbnail style={{ background: `url(${xsmall_300}) center`, backgroundSize: 'cover' }} />
        <ArticleContent>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{meta_description}</ArticleDescription>
          <ArticleResponses views={views} comments={comments_count} claps={claps_count} timestamp={updated_at} />
        </ArticleContent>
      </ArticleContainer>
    </StyledLink>
  );
};
