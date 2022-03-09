import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Register } from "../../pages";

const datatestids = {
  name: 'common_register__input-name',
  email: 'common_register__input-email',
  password: 'common_register__input-password',
  register: 'common_register__button-register',
  warning: 'common_register__element-invalid_register'
};

const customerUser = {
  name: "Rogerinho da Vila Maria",
  email: "Rogerinho@gmail.com",
  password: "Rogerinho",
};

describe("Teste da Página de Register", () => {
  
  test('Testa se o botão da página esta desabilitado', () => {
    render(
      <Register />
    );

    const button = screen.getByTestId(datatestids.register);
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('disabled', true)
  });

  test('Testa se todos os data-testid estão presentes na tela', () => {
    render(
      <Register />
    );

    Object.values(datatestids).map(value => {
      const SUT = screen.getByTestId(value);
      expect(SUT).toBeInTheDocument();
    });
  });

  test('Testa se é possivel registrar com sucesso', () => {
    render(
        <Register />
    );

    const nameInput = screen.getByTestId(datatestids.name);
    const emailInput = screen.getByTestId(datatestids.email);
    const passwordInput = screen.getByTestId(datatestids.password);
    const registerButton = screen.getByTestId(datatestids.register);

    userEvent.type(nameInput, customerUser.name);
    userEvent.type(emailInput, customerUser.email);
    userEvent.type(passwordInput, customerUser.password);

    expect(registerButton).toHaveProperty('disabled', false);

  });

  test.skip('not implemented', () => {});

});