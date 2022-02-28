import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) history.push('/login');
    else setName(user.name);
  }, [history]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <header>
      <nav>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </Link>

        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
        <Link
          to="/"
          onClick={ logOut }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </nav>
    </header>
  );
}

export default Header;
