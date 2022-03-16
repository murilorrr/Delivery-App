import React from 'react';
import Exit from '../../components/buttons/exit';
import FormCreateAnyUser from '../../components/forms/CreateAnyUser';
import UserList from '../../components/lists/UserList';
import * as S from './styles';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <S.AdminPage>
      <div>
        <S.AdminHeader>
          <div>
            GERENCIAR USUÁRIOS
          </div>
          <div>
            {user.name}
          </div>
          <Exit />
        </S.AdminHeader>
        <div>
          <div>
            Cadastrar Novo Usuário
            <FormCreateAnyUser />
          </div>
          <UserList />
        </div>
      </div>
    </S.AdminPage>
  );
}
