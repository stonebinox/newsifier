import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 90%;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #333;
  font-weight: bold;
  font-size: 48px;
`;

export const Header = () => (
  <HeaderContainer>
    <Title>Newsifier</Title>
  </HeaderContainer>
);
