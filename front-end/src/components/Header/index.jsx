import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBeerMugEmpty,
  faClipboardList,
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

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
    <S.Header>
      <S.Nav>
        {
          user.role === 'customer' && (
            <S.Span>
              <Link
                to="/customer/products"
                data-testid="customer_products__element-navbar-link-products"
              >
                <FontAwesomeIcon icon={ faBeerMugEmpty } />
              </Link>
            </S.Span>
          )
        }
        <S.Span>
          <Link
            to={ ordersLink.to }
            data-testid="customer_products__element-navbar-link-orders"
          >
            {/* { ordersLink.name } */}
            <FontAwesomeIcon icon={ faClipboardList } />
          </Link>
        </S.Span>
        <S.Span>
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {/* { user.name } */}
            <FontAwesomeIcon icon={ faUser } />
          </span>
        </S.Span>

        <S.Span>
          <Link
            to="/"
            onClick={ logOut }
            data-testid="customer_products__element-navbar-link-logout"
          >
            <FontAwesomeIcon icon={ faArrowRightFromBracket } />
          </Link>
        </S.Span>

      </S.Nav>
    </S.Header>
  );
}

export default Header;
