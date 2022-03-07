import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState('');
  const [ordersLink, setOrdersLink] = useState({ to: '' });
  const history = useHistory();

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));

    if (!userStorage) return history.push('/login');

    setUser(userStorage);

    if (userStorage.role === 'customer') {
      setOrdersLink({ to: '/customer/orders', name: 'Meus pedidos' });
    } else setOrdersLink({ to: '/seller/orders', name: 'Pedidos' });
  }, [history]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <header>
      <nav>
        {
          user.role === 'customer' && (
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          )
        }
        <Link
          to={ ordersLink.to }
          data-testid="customer_products__element-navbar-link-orders"
        >
          { ordersLink.name }
        </Link>

        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </span>
        <button
          type="button"
          onClick={ logOut }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

export default Header;
