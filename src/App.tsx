import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/header/header';
import { Articles } from './components/articles/articles';

const Container  = styled.div`
  margin: 16px;
`;

export const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Articles />
    </Container>
  </BrowserRouter>
);
