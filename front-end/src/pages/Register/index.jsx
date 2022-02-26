import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createCustomer } from '../../fetchs';
import * as S from './styles';

const twoSeconds = 2000;

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message, token } = await createCustomer({ name, email, password });

    const user = { name, email, role: 'customer', token };

    if (token) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/customer/products');
    } else {
      console.error(message);
      setError(message);
      setTimeout(() => setError(''), twoSeconds);
    }
  };

  return (
    <div>
      <S.Form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          id="name"
          value={ name }
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="email"
          name="email"
          id="email"
          value={ email }
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          name="password"
          id="password"
          value={ password }
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableButton }
        >
          Cadastrar
        </button>

        <S.ErrorMessage
          data-testid="common_register__element-invalid_register"
          className="error"
          visible={ error === '' }
        >
          {error}
        </S.ErrorMessage>
      </S.Form>
    </div>
  );
}