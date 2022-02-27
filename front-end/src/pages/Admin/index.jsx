import React from 'react';
import Exit from '../../components/buttons/exit';
import AdminHeader from './styles';
import FormCreateAnyUser from '../../components/forms/CreateAnyUser';
import UserList from '../../components/lists/UserList';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <main>
      <AdminHeader>
        <div>
          GERENCIAR USUÁRIOS
        </div>
        <div>
          {user.name}
        </div>
        <Exit />
      </AdminHeader>
      <body>
        <div>
          Cadastrar Novo Usuário
          <FormCreateAnyUser />
        </div>
        <UserList />
      </body>
    </main>
  );
}
