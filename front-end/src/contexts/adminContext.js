import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AdminUsersContext = createContext({
  users: [],
});

function AdminUsersProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  const addUser = (user) => {
    setUsersList([...usersList, { ...user }]);
  };

  const removeUser = (id) => {
    const updatedList = usersList.filter((user) => user.id !== id);
    setUsersList(updatedList);
  };

  return (
    <AdminUsersContext.Provider
      value={ {
        addUser,
        removeUser,
        usersList,
        setUsersList,
      } }
    >
      { children }
    </AdminUsersContext.Provider>
  );
}

AdminUsersProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AdminUsersProvider;
