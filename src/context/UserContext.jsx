import React from 'react';

export const UserContext = React.createContext({
  user: null,
  loading: false,
  token: null,
  setUser: () => {},
  setLoading: () => {},
  setToken: () => {}
});
