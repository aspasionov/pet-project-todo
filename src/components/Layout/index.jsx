import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import { Wrapper, Header, Title, Aside, ToggleButton, Main, LoginLinks } from './styles';
import User from '../User';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const auth = useAuth();

  const menuLinks = [
    {
      id: 3,
      text: 'Home',
      path: '',
    },
    {
      id: 4,
      text: 'Users',
      path: 'users',
      protected: true
    }
  ]

  return (
    <Wrapper open={open}>
      <Header>
        <Title>Header</Title>
        {auth?.user ? <User/> : <LoginLinks>
          <NavLink to='login'>Login</NavLink>/
          <NavLink to='register'>Register</NavLink>
        </LoginLinks>}

      </Header>

      <Aside open={open}>
        <ToggleButton onClick={toggleDrawer}>
          <span />
        </ToggleButton>
        <ul>
          {menuLinks.filter(item => !Object.prototype.hasOwnProperty.call(item, 'protected') || item.protected !== !auth?.user)
            .map(({ id, path, text, }) => (
              <li key ={id}>
                <NavLink to={path}>{text}</NavLink>
              </li>
            ))}
        </ul>
      </Aside>

      <Main>{children}</Main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
