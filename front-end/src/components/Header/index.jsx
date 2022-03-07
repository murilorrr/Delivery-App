import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './styles';
import './header.css';

function Header() {
  const [name, setName] = useState('');
  const [ordersLink, setOrdersLink] = useState({ to: '' });
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) return history.push('/login');

    setName(user.name);

    if (user.role === 'customer') {
      setOrdersLink({ to: '/customer/orders', name: 'Meus pedidos' });
    } else setOrdersLink({ to: '/seller/orders', name: 'Pedidos' });
  }, [history]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <S.Header>
      <S.Nav>
        <S.Span>
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
        </S.Span>
        <S.Span>
          <Link
            to={ ordersLink.to }
            data-testid="customer_products__element-navbar-link-orders"
          >
            { ordersLink.name }
          </Link>
        </S.Span>
        <S.Span>
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </span>
        </S.Span>

        <S.Span>
          <Link
            to="/"
            onClick={ logOut }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Link>
        </S.Span>

      </S.Nav>
    </S.Header>
  );
}

export default Header;
