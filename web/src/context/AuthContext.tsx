import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';

import { User } from '../utils/TypesUtil';

const Context = createContext<ContextType>({ authenticated: false, handleLogin: (user: User) => { }, loading: true, handleLogout: () => { } });

interface AuthProps {
  children: React.ReactNode
}

interface ContextType {
  authenticated: boolean;
  handleLogin: (user: User) => void;
  loading: boolean;
  handleLogout: () => void;
}

const AuthProvider: React.FC<AuthProps> = ({ children }) => {

  const {authenticated, loading, handleLogin, handleLogout} = useAuth();
  
  return (
    <Context.Provider value={{ authenticated, handleLogin, loading, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };