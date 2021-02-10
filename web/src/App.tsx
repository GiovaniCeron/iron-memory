import React from 'react';
import './App.css';

import { AuthProvider } from './context/AuthContext';

import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
