import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../fetchs';
import UserCard from '../cards/UserCard';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchUsers = await getAllUsers();
      console.log(fetchUsers);
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
