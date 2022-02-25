import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Home } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      {/* <Route exact path="/" component={  } /> */}
    </Switch>
  );
}

export default App;
