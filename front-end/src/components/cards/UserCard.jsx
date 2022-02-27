import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserCardDiv from './styles';
import { deleteUser } from '../../fetchs';
import * as S from '../../pages/Register/styles';

export default function UserCard({ user: { id, name, email, role }, key }) {
  const [warning, setWarnning] = useState('');

  const twoSeconds = 2000;

  const excludeUser = async () => {
    const { error } = await deleteUser(id);
    if (error) {
      setWarnning(error);
    } else {
      setWarnning('deleted');
    }
    setTimeout(() => setWarnning(''), twoSeconds);
  };

  return (
    <UserCardDiv>
      <div data-testid={ `admin_manage__element-user-table-item-number-${key}` }>
        { id }

      </div>
      <div data-testid={ `admin_manage__element-user-table-name-${key}` }>
        { name }

      </div>
      <div data-testid={ `admin_manage__element-user-table-email-${key}` }>
        { email }

      </div>
      <div data-testid={ `admin_manage__element-user-table-role-${key}` }>
        { role }

      </div>
      <button
        data-testid={ `admin_manage__element-user-table-remove-${key}` }
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
  key: PropTypes.number.isRequired,
};
