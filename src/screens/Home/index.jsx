import React from 'react';
import Todo from 'components/Todo';
import useAuth from "../../hooks/useAuth";

import * as S from './styles';

const Home = () => {
  const { user } = useAuth();

  return (
    <S.Wrap>
      <S.Title>Home</S.Title>
      <h1>Hello {user?.username}</h1>
      <Todo />
    </S.Wrap>
  )
};

export default Home;
