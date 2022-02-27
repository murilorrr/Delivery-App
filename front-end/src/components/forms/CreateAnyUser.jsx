import React, { useState, useEffect } from 'react';
import { createAnyUser } from '../../fetchs';
import * as S from '../../pages/Register/styles';
import FormCreateAnyUser from './styles';

export default function CreateAnyUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [warning, setWarning] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  // const { adminUserList, setAdminUserList } = useContext(Context);

  const twoSeconds = 2000;

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('customer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message } = await createAnyUser({ name, email, password, role });

    if (message) {
      console.error(message);
      setWarning(message);
      setTimeout(() => setWarning(''), twoSeconds);
    }
    clearInputs();
  };

  useEffect(() => {
    const validateName = () => {
      const minNameLength = 12;
      return name.length >= minNameLength;
    };
    const validateEmail = () => {
      // fonte do regex: https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email/50343015
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/i;
      return emailRegex.test(email);
    };
    const validatePassword = () => {
      const minPasswordLength = 6;
      return password.length >= minPasswordLength;
    };

    if (validateEmail() && validateName() && validatePassword()) {
      setDisableButton(false);
    } else setDisableButton(true);
  }, [name, email, password]);

  return (
    <FormCreateAnyUser onSubmit={ handleSubmit }>
      <input
        data-testid="admin_manage__input-name"
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <input
        data-testid="admin_manage__input-email"
        type="email"
        name="email"
        id="email"
        value={ email }
        placeholder="Email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        data-testid="admin_manage__input-password"
        type="password"
        name="password"
        id="password"
        value={ password }
        placeholder="Password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <select
        data-testid="admin_manage__select-role"
        value={ role }
        name="role"
        id="role"
        onChange={ ({ target }) => setRole(target.value) }
      >
        <option value="customer">customer</option>
        <option value="seller">seller</option>
        <option value="administrator">administrator</option>
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="submit"
        disabled={ disableButton }
      >
        Cadastrar

      </button>
      <S.ErrorMessage
        data-testid="admin_manage__element-invalid-register"
        className="error"
        visible={ warning === '' }
      >
        {warning}
      </S.ErrorMessage>
    </FormCreateAnyUser>
  );
}
