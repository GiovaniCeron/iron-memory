import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context } from '../../context/AuthContext';

import { User } from '../../utils/TypesUtil';

const Login = () => {

  const history = useHistory();

  const { handleLogin } = useContext(Context);

  function handleSignIn() {
    const user: User = {
      "name": "choropinho",
      "email": "chopinho@gmail.com",
      "password": "sao arnaldo"
    }

    handleLogin(user);

    history.push('/home');

  }

  return (
    <div>
      <h1>Iron Memory</h1>
      <button type='button' onClick={() => handleSignIn()}>Teste Auth</button>
    </div>
  );
}

export default Login;