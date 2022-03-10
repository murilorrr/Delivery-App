import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Login } from "../../pages";

const datatestids = {
  email: 'common_login__input-email',
  password: 'common_login__input-password',
  login: 'common_login__button-login',
  register: 'common_login__button-register',
  warning: 'common_login__element-invalid-email'
};

const customerUser = {
  email: "zebirita@email.com",
  password: "$#zebirita#$",
};

describe("Teste da Página de Admin", () => {

  test('Testa se o botão da página esta desabilitado', () => {

  });

});