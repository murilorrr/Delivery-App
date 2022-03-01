import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import UserCardDiv from './styles';
import { deleteUser } from '../../fetchs';
import * as S from '../../pages/Register/styles';
import { AdminUsersContext } from '../../contexts/adminContext';

export default function UserCard({ user: { id, name, email, role }, index }) {
  const [warning, setWarnning] = useState('');

  const { removeUser } = useContext(AdminUsersContext);

  const twoSeconds = 2000;

  const excludeUser = async () => {
    const { error } = await deleteUser(id);
    if (error) {
      setWarnning(error);
    } else {
      removeUser(id);
      setWarnning('deleted');
    }
    setTimeout(() => setWarnning(''), twoSeconds);
  };

  return (
    <UserCardDiv>
      <div data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
        { id }

      </div>
      <div data-testid={ `admin_manage__element-user-table-name-${index}` }>
        { name }

      </div>
      <div data-testid={ `admin_manage__element-user-table-email-${index}` }>
        { email }

      </div>
      <div data-testid={ `admin_manage__element-user-table-role-${index}` }>
        { role }

      </div>
      <button
        data-testid={ `admin_manage__element-user-table-remove-${index}` }
        onClick={ excludeUser }
        type="button"
      >
        Excluir

      </button>
      <S.ErrorMessage
        data-testid="admin_manage__element-invalid-register"
        className="error"
        visible={ warning === '' }
      >
        {warning}
      </S.ErrorMessage>
    </UserCardDiv>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
