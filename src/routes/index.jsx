import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Users from '../screens/Users';
import User from '../screens/User';

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/user/:id" element={<User />} />
    </Routes>
  );
}
