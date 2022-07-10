import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../screens/Login';
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth?.user?.isLogin ? <Outlet/> : <Login />
}

export default ProtectedRoutes;
