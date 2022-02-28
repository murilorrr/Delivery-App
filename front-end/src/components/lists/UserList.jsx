import React, { useEffect, useContext } from 'react';
import { getAllUsers } from '../../fetchs';
import UserCard from '../cards/UserCard';
import { AdminUsersContext } from '../../contexts/adminContext';

export default function UserList() {
  const { usersList, setUsersList } = useContext(AdminUsersContext);

  useEffect(() => {
    const fetch = async () => {
      const fetchUsers = await getAllUsers();
      console.log(fetchUsers);
      setUsersList(fetchUsers);
    };

    fetch();
  }, [setUsersList]);

  return (
    <div>
      { usersList.length >= 1 ? usersList
        .map((user, index) => (<UserCard
          user={ user }
          key={ index }
          index={ index }
        />)) : <div>Nenhum Usuário ainda</div>}
    </div>
  );
}
