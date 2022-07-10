import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from 'components/Preloader';
import * as S from './styles';

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (id)
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => setUserInfo(json));
  }, [id]);

  if (!userInfo)
    return (
      <div>
        <Preloader />
      </div>
    );

  return (
    <S.Wrap>
      <S.UserName>{userInfo?.name || ''}</S.UserName>
      <S.UserId>
        User_id: <S.Id>{id || ''}</S.Id>
      </S.UserId>
      <S.Info>
        <S.InfoItem>
          <S.SubName>username</S.SubName>
          <S.SubNameValue>{userInfo?.username || ''}</S.SubNameValue>
        </S.InfoItem>

        <S.InfoItem>
          <S.SubName>email</S.SubName>
          <S.SubNameValue>{userInfo?.email || ''}</S.SubNameValue>
        </S.InfoItem>

        <S.InfoItem>
          <S.SubName>address</S.SubName>
          <S.SubNameValue>
            Street: {userInfo?.address?.street || ''}
            <br />
            City: {userInfo?.address?.city || ''}
          </S.SubNameValue>
        </S.InfoItem>

        <S.InfoItem>
          <S.SubName>phone</S.SubName>
          <S.SubNameValue>{userInfo?.phone || ''}</S.SubNameValue>
        </S.InfoItem>

        <S.InfoItem>
          <S.SubName>company</S.SubName>
          <S.SubNameValue>{userInfo?.company?.name || ''}</S.SubNameValue>
        </S.InfoItem>

        <S.InfoItem>
          <S.SubName>website</S.SubName>
          <S.SubNameValue>{userInfo?.website || ''}</S.SubNameValue>
        </S.InfoItem>
      </S.Info>
    </S.Wrap>
  );
};

export default User;
