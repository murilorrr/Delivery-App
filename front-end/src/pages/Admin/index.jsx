import React from 'react';
import {
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Exit from '../../components/buttons/exit';
import FormCreateAnyUser from '../../components/forms/CreateAnyUser';
import UserList from '../../components/lists/UserList';
import * as S from './styles';

export default function Home() {
<<<<<<< HEAD
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'trybeAdmin' };
=======
  // const user = JSON.parse(localStorage.getItem('user'));
>>>>>>> c2eb6ef6935d9629d1b6a100ce7f94194f160c9b

  return (
    <S.AdminPage>
      <h1>
        GERENCIAR USUÁRIOS
      </h1>
      <header>
        <div>
          <FontAwesomeIcon icon={ faUser } />
          {/* {user.name} */}
        </div>
        <Exit />
      </header>
      <div>
        <h4>
          Cadastrar Novo Usuário
        </h4>
        <FormCreateAnyUser />
      </div>
      <UserList />
    </S.AdminPage>
  );
}
