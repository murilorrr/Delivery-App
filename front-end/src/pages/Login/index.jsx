import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  return (
    <div>
      Login
      <button
        type="button"
        onClick={ () => history.push('/register') }
        data-testid="common_login__button-register"
      >
        Cadastrar
      </button>
    </div>
  );
}
