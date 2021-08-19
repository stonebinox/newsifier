import React from 'react';
import styled from 'styled-components';

import { ArticleType } from '../../services/types';

interface Props {
  article: ArticleType;
};

export const Article = ({ article }: Props) => {
    console.log(article);
  return (
    <div>hello</div>      
  );
};
