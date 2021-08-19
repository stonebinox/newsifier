import React from 'react';
import styled from 'styled-components';

import { Header } from './components/header/header';
import { Articles } from './components/articles/articles';

const Container  = styled.div`
  margin: 16px;
`;

export const App = () => (
  <Container>
    <Header />
    <Articles />
  </Container>
);
