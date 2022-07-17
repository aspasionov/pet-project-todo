import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import { Wrapper, Header, Title, Aside, ToggleButton, Main } from './styles';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const auth = useAuth();

  const menuLinks = [
    {
      id: 1,
      text: 'Login',
      path: 'login',
      protected: false
    },
    {
      id: 2,
      text: 'Register',
      path: 'register',
      protected: false
    },
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
