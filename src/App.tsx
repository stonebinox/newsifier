import React from 'react';
import styled from 'styled-components';

import { Header } from './components/header/header';

const Container  = styled.div`
  margin: 16px;
`;

export const App = () => (
  <Container>
    <Header />
  </Container>
);
