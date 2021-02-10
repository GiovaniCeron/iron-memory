import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../context/AuthContext';

const PrivateRoute = ({ ...rest }) => {
  const { authenticated, loading } = useContext(Context);

  console.log(authenticated);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (!authenticated) {
    return <Redirect to="/" />
  }  

  return <Route {...rest} />

}

export default PrivateRoute;