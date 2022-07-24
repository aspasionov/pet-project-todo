import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, ExitToApp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import useAuth from "../../hooks/useAuth";
import { UserWrap, UserContent, UserLogo, UserExit } from './styles';

const User = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await setUser(null);
    await localStorage.removeItem('token');
    await navigate('/login');
  }

  return (
    <UserWrap>
      <UserLogo>
        <Person/>
      </UserLogo>

      <UserContent>
        <div>{user?.username}</div>
        {user?.email}
      </UserContent>

      <Tooltip title="Logout">
        <UserExit onClick={handleLogout}>
          <ExitToApp/>
        </UserExit>
      </Tooltip>
    </UserWrap>
  );
};

export default User;
