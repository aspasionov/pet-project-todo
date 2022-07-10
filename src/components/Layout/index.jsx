import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, Header, Title, Aside, ToggleButton, Main } from './styles';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
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
          <li>
            <NavLink to="login">To Login</NavLink>
            <br />
            <NavLink to="">Home</NavLink>
            <br />
            <NavLink to="users">Users</NavLink>
          </li>
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
