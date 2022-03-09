import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { createCustomer } from '../../fetchs';
import * as S from './styles';

const twoSeconds = 2000;
const nameId = 'name';
const emailId = 'email';
const passwordId = 'password';
let timer;

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [reminder, setReminder] = useState(false);

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

    setNameError(!validateName() && name !== '');
    setEmailError(!validateEmail() && email !== '');
    setPasswordError(!validatePassword() && password !== '');
  }, [name, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message, token } = await createCustomer({ name, email, password });
    const user = { name, email, role: 'customer', token };

    if (token) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/customer/products');
    } else {
      setError(message);
      timer = setTimeout(() => setError(''), twoSeconds);
    }
  };

  return (
    <S.Main>
      <h1>Iniciando os serviços!</h1>
      <h2>Cadastre-se para continuar</h2>
      <S.Form onSubmit={ handleSubmit }>
        <label htmlFor={ nameId } className={ nameError ? 'error' : '' }>
          <img src="/images/user-solid.svg" alt="nome" />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            id={ nameId }
            value={ name }
            data-testid="common_register__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor={ emailId } className={ emailError ? 'error' : '' }>
          <img src="/images/envelope-solid.svg" alt="e-mail" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={ email }
            data-testid="common_register__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor={ passwordId } className={ passwordError ? 'error' : '' }>
          <img src="/images/lock-solid.svg" alt="senha" />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            id={ passwordId }
            value={ password }
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <img src="/images/eye-slash-solid.svg" alt="mostrar senha" />
        </label>

        <S.Reminder>
          <p>Lembrar de mim na próxima vez</p>
          <S.Switch
            height={ 16 }
            width={ 40 }
            checked={ reminder }
            onChange={ () => setReminder((prev) => !prev) }
            handleDiameter={ 16 }
            boxShadow="none"
          />
        </S.Reminder>

        <S.Button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableButton }
        >
          Cadastrar
        </S.Button>

        <S.Register>
          <span>Já tem uma conta? </span>
          <Link
            to="/login"
            data-testid="common_login__button-register"
          >
            Entrar
          </Link>
        </S.Register>

        <S.ErrorMessage
          data-testid="common_register__element-invalid_register"
          className={ error !== '' ? 'error' : '' }
          onClick={ () => {
            clearTimeout(timer);
            setError('');
          } }
        >
          <div>{error}</div>
        </S.ErrorMessage>
      </S.Form>
    </S.Main>
  );
}
