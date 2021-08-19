import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getComments } from '../../services/api';
import { ArticleType, CommentType } from '../../services/types';
import { ArticleResponses } from '../article-responses/article-responses';
import { ArticleDescription, ArticlesContainer, LoadingText } from '../article/article.styles';
import { Comment } from '../comment/comment';

const ArticleHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 28px;
`;

const ArticleImage = styled.img`
  width: 100%;
  border: 0;
`;

const ArticleSmallDescription = styled(ArticleDescription)`
  text-align: center;
  margin: 0 auto;
  margin-top: 16px;
  width: 80%;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: #333;
  width: 100%;
`;

const ArticleBody = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 32px;
`;

const ArticleCommentsHolder = styled.div`
  width: 80%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

interface Props {
  article: ArticleType | null;
  goBack: () => void;
}

const parseArticleBody = (content) => {
  if (!content) {
    return <></>;
  }

  return content.filter((blocks) => blocks.type === 'paragraph').map((paragraph, index) => (
    <Paragraph key={index} dangerouslySetInnerHTML={{ __html: paragraph.data.text }} />
  ));
};

const parseComments = (comments: CommentType[]) => {
  return comments.map((comment, index) => (
    <Comment comment={comment} key={index} />
  ));
};

export const ArticlePage = ({ article, goBack }: Props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!article) {
    return (
      <LoadingText>Loading article ...</LoadingText>
    );
  }

  const loadComments = (articleId) => {
    setLoading(true);
    getComments(articleId).then(response => response.json()).then(data => {
      setLoading(false);
      const { data: commentsData } = data;
      setComments(commentsData);
    });
  };

  const { id, title, content, image, meta_description = '', comments_count = 0, claps_count = 0, views = 0, updated_at } = article;

  if (comments_count > 0 && !loading && comments.length === 0) {
    loadComments(id);
  }

  return (
    <ArticlesContainer>
      <Link to="/" onClick={goBack}>&lt; Back</Link>
      <ArticleHeading>{title}</ArticleHeading>
      <ArticleImage src={image} alt={title} />
      <ArticleSmallDescription>{meta_description}</ArticleSmallDescription>
      <ArticleBody>
        {parseArticleBody(content)}
        <ArticleResponses claps={claps_count} views={views} comments={comments_count} timestamp={updated_at} />
      </ArticleBody>
      <ArticleCommentsHolder>
        <strong>Comments ({comments_count})</strong><br /><br />
        {comments_count === 0 && <LoadingText>No comments.</LoadingText>}
        {comments_count > 0 && loading && (<LoadingText>Loading comments ...</LoadingText>)}
        {comments_count > 0 && !loading && parseComments(comments)}
      </ArticleCommentsHolder>
    </ArticlesContainer>
  );
};
