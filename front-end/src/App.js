import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={ ['/', '/login'] }
          component={ () => (
            <a
              href="/register"
              data-testid="common_login__button-register"
            >
              Login
            </a>) }
        />
        <Route path="/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
