import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Home, OrderDetails, Products, AdminPage } from './pages';

import CartContextProvider from './contexts/cartContext';
import AdminUsersProvider from './contexts/adminContext';

function App() {
  return (
    <CartContextProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <AdminUsersProvider>
          <Route exact path="/admin/manage" component={ AdminPage } />
        </AdminUsersProvider>
        <Route exact path="/customer/orders/:orderId" component={ OrderDetails } />
        {/* <Route exact path="/" component={  } /> */}
      </Switch>
    </CartContextProvider>
  );
}

export default App;
