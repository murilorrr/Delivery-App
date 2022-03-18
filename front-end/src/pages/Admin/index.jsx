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
  // const user = JSON.parse(localStorage.getItem('user'));

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
