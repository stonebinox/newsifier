import styled from 'styled-components';

export const ArticleContainer = styled.div`
  width: 100%;
  padding: 8px;
  border: 1px solid #fff;
  border-left: 4px solid #ffa500;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-spacing: 8px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;

  :hover {
    border: 1px solid #ffa500;
    box-shadow: 0px 2px 4px #ccc;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleTitle = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ArticleThumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 12px;
  flex-shrink: 0;
`;

export const ArticleDescription = styled.div`
  font-size: 16px;
  color: #666;
  text-align: left;
  margin-top: 4px;
`;

export const ArticleResponses = styled.div`
  margin-top: 8px;
  text-align: left;
  color: #999;
  font-size: 12px;
`;