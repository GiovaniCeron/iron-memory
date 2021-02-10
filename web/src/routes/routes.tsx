import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login/login';
import Home from '../pages/Home/home';

const Routes = () => {
  return (
      <BrowserRouter>
        <Route component={Login} path="/" exact />
        <PrivateRoute component={Home} path="/home" exact />
      </BrowserRouter>
  );
}

export default Routes;