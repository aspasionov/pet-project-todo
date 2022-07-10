import React from 'react';
import Todo from 'components/Todo';

import * as S from './styles';

const Home = () => (
  <S.Wrap>
    <S.Title>Home</S.Title>
    <Todo />
  </S.Wrap>
);

export default Home;
