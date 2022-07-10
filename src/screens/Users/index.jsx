import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Table from 'components/Table';
import Preloader from 'components/Preloader';
import * as S from './styles';

const Users = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setInfo(json));
  }, []);

  if (!info) return <Preloader />;

  const colName = [
    {
      label: 'name',
      key: 'name',
      Row: (label, key, item) => (
        <NavLink to={`/user/${item.id}`}>{item.name || ''}</NavLink>
      )
    },
    {
      label: 'username',
      key: 'username'
    },
    {
      label: 'email',
      key: 'email'
    },
    {
      label: 'city',
      key: 'address.city'
    }
  ];

  return (
    <S.Wrap>
      <S.Title>Users info</S.Title>
      <Table data={info} colName={colName} />
    </S.Wrap>
  );
};

export default Users;
