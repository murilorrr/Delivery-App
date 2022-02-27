import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Home, OrderDetails, AdminPage } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/orders/:orderId" component={ OrderDetails } />
      <Route exact path="/admin/manage" component={ AdminPage } />
      {/* <Route exact path="/" component={  } /> */}
    </Switch>
  );
}

export default App;
