import React, {useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import HttpClient from '../../api/base.api';
import useAuth from '../../hooks/useAuth';
import * as S from './styles';

const Login = () => {
    const [userData, setUserData] = React.useState({
      username: '',
      email: '',
      password: ''
    })
    const [errors, setErrors] = React.useState(null);

    const {pathname} = useLocation();

    const isLogin = pathname === '/login';

    const client = new HttpClient();

    const {setUser, setToken} = useAuth()

    const navigate = useNavigate();

    const onChangeUserData = ({target: {value, name}}) => {
      setUserData({...userData, [name]: value})
    }

    const fieldValidation = (key) => {
      if(!errors) return null;
      const errorKey = Object.keys(errors).filter(item => item.includes(key));
      return errors[errorKey] || null;
    }

    useEffect(() => {
      setErrors(null)
    },[isLogin])

    const onSubmit = async () => {
      try {
        if (!isLogin) {
        const registerData = await client.post('user', userData);
          if(registerData?.errors) setErrors(registerData.errors)
        };
        const {username, ...loginData} = userData;
        const data = await client.post('user/login', loginData);
        if (data.user) {
          const {user} = data;
          user.isLogin = true;
          localStorage.setItem('token', user.token);
          await setUser(user);
          await setToken(user.token);
          await navigate('/');
        } else {
          const {errors: errorsData} = data;
          if (isLogin) setErrors(errorsData);
        }
      } catch {
        setToken(null)
      }
    }

    return (
      <S.Wrap>
        <S.Title>{isLogin ? 'Login' : 'Register'}</S.Title>
        <S.Form>
          <div style={{marginTop: 30, textAlign: 'center'}}>
            {fieldValidation('User') && <S.Error>{fieldValidation('User')}</S.Error>}
          </div>
          {!isLogin &&
            <>
            <S.FormItem className={fieldValidation('username')  && 'error'}>
              <input type="text" name="username" placeholder="username" onChange={onChangeUserData}/>
            </S.FormItem>
            {fieldValidation('username') && <S.Error>{fieldValidation('username')}</S.Error>}
            </>
          }
          <S.FormItem className={fieldValidation('email') || fieldValidation('User') && 'error'}>
            <input type="mail" name="email" placeholder="email" onChange={onChangeUserData}/>
          </S.FormItem>
          {fieldValidation('email') && <S.Error>{fieldValidation('email')}</S.Error>}

          <S.FormItem className={fieldValidation('password') || fieldValidation('User') && 'error'}>
            <input type="password" name="password" placeholder="password" onChange={onChangeUserData}/>
          </S.FormItem>
          {fieldValidation('password') && <S.Error>{fieldValidation('password')}</S.Error>}

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
