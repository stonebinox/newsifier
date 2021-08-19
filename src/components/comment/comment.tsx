import React from 'react';
import styled from 'styled-components';

import { CommentType } from '../../services/types';

const CommentContainer = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 8px;
  margin-bottom: 8px;
`;

const Timestamp = styled.div`
  color: #666;
  font-size: 12px;
  margin-top: 16px;
`;

interface Props {
  comment: CommentType;
}

export const Comment = ({ comment }: Props) => {
  const { content, updated_at, username } = comment;
  const updatedAt = new Date(updated_at);

  return (<CommentContainer>
    <strong>{username}</strong><br /><br />
    {content}
    <Timestamp>Updated on {updatedAt.getDate()}/{updatedAt.getMonth() + 1}/{updatedAt.getFullYear()}</Timestamp>
  </CommentContainer>);
};
