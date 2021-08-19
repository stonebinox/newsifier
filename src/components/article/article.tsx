import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignLanguage, faComments } from '@fortawesome/free-solid-svg-icons';

import { ArticleType } from '../../services/types';
import { ArticleContainer, ArticleTitle, ArticleThumbnail, ArticleContent, ArticleDescription, ArticleResponses } from './article.styles';


interface Props {
  article: ArticleType;
};

export const Article = ({ article }: Props) => {
    console.log(article);
  const { title, thumbnails: { xsmall_300 }, meta_description, claps_count = 0, comments_count = 0, updated_at } = article;

  const updatedAt = new Date(updated_at);

  return (
    <ArticleContainer>
      <ArticleThumbnail style={{ background: `url(${xsmall_300}) center`, backgroundSize: 'cover' }} />
      <ArticleContent>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{meta_description}</ArticleDescription>
        <ArticleResponses>
          {claps_count} <FontAwesomeIcon icon={faSignLanguage} /> &bull; {comments_count} <FontAwesomeIcon icon={faComments} /> &bull; Last updated: {updatedAt.getDate()}/{updatedAt.getMonth() + 1}/{updatedAt.getFullYear()} at {updatedAt.getHours() < 10 ? `0${updatedAt.getHours()}` : updatedAt.getHours()}{updatedAt.getMinutes() < 10 ? `0${updatedAt.getMinutes()}`: updatedAt.getMinutes()} hours
        </ArticleResponses>
      </ArticleContent>
    </ArticleContainer>
  );
};
