import React from 'react';
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
