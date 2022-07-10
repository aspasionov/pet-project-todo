import React from 'react';
import { Box, Circle, Container } from './styles';

const Preloader = (props) => (
  <Box {...props}>
    <Container>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Container>
  </Box>
);

export default Preloader;
