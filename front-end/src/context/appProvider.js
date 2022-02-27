import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './context';

function AppProvider({ children }) {
  const [adminUserList, setAdminUserList] = useState([]);

  const contextValue = {
    setAdminUserList,
    adminUserList,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

AppProvider.propTypes = {
  children: node.isRequired,
};

export default AppProvider;
