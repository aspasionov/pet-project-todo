import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import * as S from './styles';
import HttpClient from '../../api/base.api';
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [userData, setUserData] = React.useState({
      username: '',
      email: '',
      password: ''
    })

    const {pathname} = useLocation();

    const isLogin = pathname === '/login';

    const client = new HttpClient();

    const {setUser, setToken, setLoading} = useAuth()

    const navigate = useNavigate();

    const onChangeUserData = ({target: {value, name}}) => {
      setUserData({...userData, [name]: value})
    }


    const onSubmit = async () => {
      setLoading(true)

      try {
        if (!isLogin) await client.post('user', userData);
        const {username, ...loginData} = userData;
        const {user} = await client.post('user/login', loginData);
        user.isLogin = true;
        localStorage.setItem('token', user.token);
        await setUser(user);
        await setToken(user.token);
      } catch {
        setToken(null)
      } finally {
        setLoading(false);
        navigate('/');
      }
    }

    return (
      <S.Wrap>
        <S.Title>{isLogin ? 'Login' : 'Register'}</S.Title>
        <S.Form>
          {!isLogin &&
          <S.FormItem>
            <input type="text" name="username" onChange={onChangeUserData}/>
          </S.FormItem>
          }
          <S.FormItem>
            <input type="mail" name="email" onChange={onChangeUserData}/>
          </S.FormItem>
          <S.FormItem>
            <input type="password" name="password" onChange={onChangeUserData}/>
          </S.FormItem>
          <div style={{textAlign: 'right'}}>
            <button type='button' onClick={onSubmit}>
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </S.Form>
      </S.Wrap>
    )
  }

;

export default Login;
