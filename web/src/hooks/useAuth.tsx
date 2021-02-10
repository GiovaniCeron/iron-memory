import {useState, useEffect} from 'react';

import api from '../services/api';
import { User } from '../utils/TypesUtil';

export default function useAuth() {
  
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);


  async function handleLogin(user: User) {
    const { data: { token } } = await api.post('users/login', user);
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);

  }

  function handleLogout(){
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
  }

  return {authenticated, loading, handleLogin, handleLogout};
}