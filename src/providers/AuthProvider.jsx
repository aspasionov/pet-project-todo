

import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import HttpClient from '../api/base.api';
import { UserContext } from '../context/UserContext';

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState(null);

  const client = new HttpClient();

  const navigate = useNavigate()

  const contextValue = React.useMemo(() => ({
    loading,
    user,
    token,
    setUser,
    setToken,
    setLoading,
  }), [loading, user, token, setUser, setToken])

  useEffect(() => {
    (async() => {
      setLoading(true)
      const key = localStorage.getItem('token');
      setToken(key);

      try {
        if(key) {
          await client.setBearerAuth(key);
          const { user: userData } = await client.get('me');
          userData.isLogin = true;
          setUser(userData);
        }
      } catch {
        setToken(null)
      } finally {
        setLoading(true);
        navigate('/');
      }
    })()
  },[])

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
