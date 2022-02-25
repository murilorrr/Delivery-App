import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import createUser from '../../services/user/createUser';

const Register = () => {
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

    try {
      const user = await createUser({ name, email, password });
      localStorage.setItem('user', JSON.stringify(user));

      history.push('/customer/products');
    } catch (err) {
      console.error(err);
      setError('error');
    }
  };

  return (
    <div>
      <S.Form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          id="name"
          data-testid="common_register__input-name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="email"
          name="email"
          id="email"
          data-testid="common_register__input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          name="password"
          id="password"
          data-testid="common_register__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          data-testid="common_register__input-register"
          disabled={ disableButton }
        >
          Cadastrar
        </button>

        <S.ErrorMessage
          data-testid="common_register__element-invalid_register"
          className={ error }
        >
          Erro ao cadastrar
        </S.ErrorMessage>
      </S.Form>
    </div>
  );
};

export default Register;
