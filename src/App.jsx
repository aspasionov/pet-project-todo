import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider"

import Layout from './components/Layout';
import AppRoutes from './routes';

const App = () => (
  <Router>
    <AuthProvider>
      <Layout>{AppRoutes()}</Layout>
    </AuthProvider>
  </Router>
);

export default App;
