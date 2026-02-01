import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';

const App = () => {
  const userRole = 'user'; // This can be dynamically set based on user authentication

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' render={() => (
          userRole === 'admin' ? <Admin /> : <Redirect to='/' />
        )} />
        <Route path='/user' render={() => (
          userRole === 'user' ? <User /> : <Redirect to='/' />
        )} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;