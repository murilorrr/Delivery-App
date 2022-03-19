import {
  // faArrowRightFromBracket,
  // faBeerMugEmpty,
  faCartShopping,
  faClipboardList,
  faUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useCart from '../../hooks/useCart';

import * as S from './styles';

function Header({ children }) {
  const { cartTotal } = useCart();
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

  return (
    <S.Header>
      {
        user.role === 'customer' && (
          <S.Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
            current={ history.location.pathname }
          >
            <FontAwesomeIcon icon={ faHome } />
            <span>Início</span>
          </S.Link>
        )
      }

      {
        user.role === 'administrator' && (
          <S.Link
            to="/admin/manage"
            data-testid="customer_products__element-navbar-link-products"
            current={ history.location.pathname }
          >
            <FontAwesomeIcon icon={ faHome } />
            <span>Início</span>
          </S.Link>
        )
      }

      {
        user.role !== 'administrator' && (
          <S.Link
            to={ ordersLink.to }
            data-testid="customer_products__element-navbar-link-orders"
            current={ history.location.pathname }
          >
            <FontAwesomeIcon
              icon={ user.role === 'customer' ? faClipboardList : faHome }
            />
            <span>{ ordersLink.name }</span>
          </S.Link>
        )
      }

      {
        user.role === 'customer' ? (
          <S.Link
            to="/customer/checkout"
            data-testid="customer_products__button-cart"
            disabled={ !cartTotal }
            current={ history.location.pathname }
          >
            <FontAwesomeIcon icon={ faCartShopping } />
            <span>Carrinho</span>
          </S.Link>
        ) : null
      }

      <S.Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/profile"
        current={ history.location.pathname }
      >
        <FontAwesomeIcon icon={ faUser } />
        <span>Conta</span>
      </S.Link>

      { children }
    </S.Header>
  );
}

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
