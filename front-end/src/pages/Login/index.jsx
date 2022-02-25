import React from 'react';

export default function Login() {
  return (
    <div>
      Login
      <a
        href="/register"
        data-testid="common_login__button-register"
      >
        Cadastrar
      </a>
    </div>
  );
}
