import { faAngleRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

const apiHashfyBaseURL = 'https://api.hashify.net/hash/md5/hex?value=';

export default function Profile() {
  const [user, setUser] = useState({});
  const [emailHash, setEmailHash] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (!userStorage) history.push('/login');

    setUser(JSON.parse(userStorage));

    fetch(`${apiHashfyBaseURL}${user.email}`)
      .then((json) => json.json().then((response) => setEmailHash(response)));
  }, [history, user.email]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <S.Main>
      <div>
        {emailHash ? <img src={ `https://gravatar.com/avatar/${emailHash.Digest}?d=wavatar` } alt="avatar" /> : <div />}
        <h1>{ user.name }</h1>
      </div>

      <S.Menu>
        <Link to="/">
          <span>{ user.role === 'administrator' ? 'Início' : 'Pedidos' }</span>
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
