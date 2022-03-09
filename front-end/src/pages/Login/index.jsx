import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getByEmail, loginUser } from '../../fetchs';
import * as S from './styles';

const twoSeconds = 2000;

const emailId = 'email';
const passwordId = 'password';
let timer;

const verifyUserLogged = (redirectUserByRole) => {
  const isLogged = localStorage.getItem('user');
  if (isLogged) {
    const user = JSON.parse(isLogged);
    redirectUserByRole(user.role);
  }
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [showPassword, setShowPassword] = useState('password');

  const history = useHistory();

  useEffect(() => {
    const validateEmail = () => {
      const emailVerification = /\S+@\S+\.\S+/;
      const isValid = emailVerification.test(email);
      return isValid;
    };
    const validatePassword = () => {
      const minPasswordLength = 6;
      const isValid = password.length >= minPasswordLength;
      return isValid;
    };

    setEmailError(!validateEmail() && email !== '');
    setPasswordError(!validatePassword() && password !== '');
  }, [email, password]);

  const redirectUserByRole = useCallback((role) => {
    const page = {
      customer: '/customer/products',
      seller: '/seller/orders',
      administrator: '/admin/manage',
    };
    return history.push(page[role]);
  }, [history]);

  useEffect(() => verifyUserLogged(redirectUserByRole), [redirectUserByRole]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message, token } = await loginUser({ email, password });

    if (token) {
      const { name, role } = await getByEmail(email);
      const userInfo = { name, email, role };
      const user = { ...userInfo, token };

      localStorage.setItem('user', JSON.stringify(user));
      // redirect user by role
      redirectUserByRole(role);
    } else {
      setError(message);
      timer = setTimeout(() => setError(''), twoSeconds);
    }
  };

  return (
    <S.Main>
      <h1>Vamos às bebidas!</h1>
      <h2>Faça login para continuar</h2>
      <S.Form onSubmit={ handleSubmit }>
        <label htmlFor={ emailId } className={ emailError ? 'error' : '' }>
          <img src="/images/envelope-solid.svg" alt="e-mail" />
          <input
            type="email"
            name="email"
            id={ emailId }
            value={ email }
            placeholder="E-mail"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor={ passwordId } className={ passwordError ? 'error' : '' }>
          <img src="/images/lock-solid.svg" alt="senha" />
          <input
            type={ showPassword }
            name="password"
            placeholder="Senha"
            id={ passwordId }
            value={ password }
            data-testid="common_login__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <button
            type="button"
            onClick={ () => setShowPassword((prev) => {
              if (prev === 'password') return 'text';
              return 'password';
            }) }
          >
            {
              showPassword === 'password'
                ? <img src="/images/eye-slash-solid.svg" alt="mostrar senha" />
                : <img src="/images/eye-solid.svg" alt="esconder senha" />
            }
          </button>
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
          data-testid="common_login__button-login"
          disabled={ passwordError || emailError || !email || !password }
        >
          Entrar
        </S.Button>

        <S.Register>
          <span>Não tem uma conta? </span>
          <Link
            to="/register"
            data-testid="common_login__button-register"
          >
            Cadastre-se
          </Link>
        </S.Register>

        <S.ErrorMessage
          data-testid="common_login__element-invalid-email"
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
