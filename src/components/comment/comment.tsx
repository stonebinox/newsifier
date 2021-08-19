import React from 'react';

import { CommentType } from '../../services/types';

interface Props {
  comment: CommentType;
}

export const Comment = ({ comment }: Props) => {
  const { content, updated_at, user_avatar, username } = comment;

  return (<div />);
};
