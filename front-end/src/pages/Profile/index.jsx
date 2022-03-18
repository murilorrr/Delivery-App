import { faAngleRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import Header from '../../components/Header';

import * as S from './styles';

export default function Profile() {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (!userStorage) history.push('/login');

    setUser(JSON.parse(userStorage));
  }, [history]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <S.Main>
      <div>
        <span />
        <h1>{ user.name }</h1>
      </div>

      <S.Menu>
        <Link to={ user.role === 'customer' ? '/customer/orders' : '/seller/orders' }>
          <span>Pedidos</span>
          <FontAwesomeIcon icon={ faAngleRight } />
        </Link>
        <div>
          <span>Cupons promocionais</span>
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
        <div>
          <span>Configurações</span>
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
        <div>
          <span>Ajuda</span>
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
        <Link to="/login" onClick={ logOut }>
          <span>Sair</span>
          <FontAwesomeIcon icon={ faArrowRightFromBracket } />
        </Link>
      </S.Menu>
    </S.Main>
  );
}
