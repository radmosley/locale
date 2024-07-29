// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* user profile */}
      {/* business registration */}
      {/* business management */}
      {/* proucts search */}
      {/* product page */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
