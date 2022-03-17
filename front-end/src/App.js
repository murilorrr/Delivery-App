import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Checkout,
  Login,
  Register,
  Home,
  OrderDetails,
  Products,
  AdminPage,
  Orders,
  Sellers,
  OrderDetailsSeller,
  Profile,
} from './pages';

import CartContextProvider from './contexts/cartContext';
import AdminUsersProvider from './contexts/adminContext';
import Header from './components/Header';

function App() {
  return (
    <CartContextProvider>
      <AdminUsersProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/admin/manage" component={ AdminPage } />
          <>
            <Route path="/" component={ Header } />
            <Route exact path="/customer/products" component={ Products } />
            <Route exact path="/customer/checkout" component={ Checkout } />
            <Route exact path="/customer/orders/:orderId" component={ OrderDetails } />
            <Route
              exact
              path="/seller/orders/:orderId"
              component={ OrderDetailsSeller }
            />
            <Route exact path="/seller/orders" component={ Sellers } />
            <Route exact path="/customer/orders" component={ Orders } />
            <Route exact path="/profile" component={ Profile } />
          </>
          {/* <Route exact path="/" component={  } /> */}
        </Switch>
      </AdminUsersProvider>
    </CartContextProvider>
  );
}

export default App;
