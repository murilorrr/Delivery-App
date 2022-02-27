import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Home, OrderDetails, Products } from './pages';

import CartContextProvider from './contexts/cartContext';

function App() {
  return (
    <CartContextProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/orders/:orderId" component={ OrderDetails } />
        {/* <Route exact path="/" component={  } /> */}
      </Switch>
    </CartContextProvider>
  );
}

export default App;
