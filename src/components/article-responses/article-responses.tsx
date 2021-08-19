import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignLanguage, faComments, faEye } from '@fortawesome/free-solid-svg-icons';

import { ArticleResponsesContainer } from '../article/article.styles';

interface Props {
  views: number;
  claps: number;
  comments: number;
  timestamp: Date;
}

export const ArticleResponses = ({ views, claps, comments, timestamp }: Props) => {
  const updatedAt = new Date(timestamp);

  return (
    <ArticleResponsesContainer>
      {views} <FontAwesomeIcon icon={faEye} /> &bull; {claps} <FontAwesomeIcon icon={faSignLanguage} /> &bull; {comments} <FontAwesomeIcon icon={faComments} /> &bull; Last updated: {updatedAt.getDate()}/{updatedAt.getMonth() + 1}/{updatedAt.getFullYear()} at {updatedAt.getHours() < 10 ? `0${updatedAt.getHours()}` : updatedAt.getHours()}{updatedAt.getMinutes() < 10 ? `0${updatedAt.getMinutes()}`: updatedAt.getMinutes()} hours
    </ArticleResponsesContainer>
  )
};
