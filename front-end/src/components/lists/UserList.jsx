import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../fetchs';
import UserCard from '../cards/UserCard';
// import { AdminUsersContext } from '../../contexts/adminContext';

export default function UserList() {
  // const [adminUserList, setAdminUserList] = useContext(AdminUsersContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchUsers = await getAllUsers();
      console.log(fetchUsers);
      // setAdminUserList(fetchUsers);
      setUsers(fetchUsers);
    };

    fetch();
  }, []);

  return (
    <div>
      { users.length >= 1 ? users
        .map((user, index) => (<UserCard
          user={ user }
          key={ index }
        />)) : <div>Loading</div>}
    </div>
  );
}
