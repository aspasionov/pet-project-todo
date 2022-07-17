import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import HttpClient from '../api/base.api';
import {UserContext} from '../context/UserContext';
import Preloader from '../components/Preloader';

function AuthProvider({children}) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState(null);

  const client = new HttpClient();

  const navigate = useNavigate()

  const contextValue = React.useMemo(() => ({
    user,
    token,
    setUser,
    setToken,
  }), [ user, token, setUser, setToken])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const key = localStorage.getItem('token');
      setToken(key);

      try {
        if (key) {
          await client.setBearerAuth(key);
          const {user: userData} = await client.get('me');
          userData.isLogin = true;
          setUser(userData);
          navigate('/');
        }
      } catch {
        setToken(null)
      } finally {
        setLoading(false);
      }
    })()
  }, [])

  return (loading ?
          <Preloader/>
          :
          <UserContext.Provider value={contextValue}>
            {children}
          </UserContext.Provider>)
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
