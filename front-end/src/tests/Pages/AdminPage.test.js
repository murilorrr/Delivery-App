import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminPage } from '../../pages';
import { generateJWT } from '../../../../back-end/src/utils';
import AdminUsersProvider from '../../contexts/adminContext';

const warnning = 'admin_manage__element-invalid-exclude';

const token = generateJWT({
  email: 'adm@deliveryapp.com',
  name: 'Delivery App Admin',
  role: 'administrator',
});

const adminUser = {
  email: 'adm@deliveryapp.com',
  name: 'Delivery App Admin',
  role: 'administrator',
  token,
};

const factoryUser = () => {
  const roles = ['administrator', 'seller', 'customer'];
  const quantityOfRoles = 3;
  const randomRole = Math.floor(Math.random() * quantityOfRoles);

  let randomName = '';
  const minNameLength = 13;
  while (randomName.length < minNameLength) {
    randomName = faker.name.findName();
  }

  const splitedName = randomName.split(' ');

  const passwordLength = 9;
  const randomEmail = faker.internet.email(splitedName[0], splitedName[1]);
  const randomPassword = faker.random.alphaNumeric(passwordLength);
  const role = roles[randomRole];
  const userFake = { randomName, randomEmail, randomPassword, role };

  return userFake;
};

const populationMockUsers = (numberOfUsers, array) => {
  for (let index = 0; index < numberOfUsers; index += 1) {
    array.push(factoryUser());
  }
};

const datatestids = {
  form: {
    createButton: 'admin_manage__button-register',
    password: 'admin_manage__input-password',
    name: 'admin_manage__input-name',
    email: 'admin_manage__input-email',
    role: 'admin_manage__select-role',
    warnning: 'admin_manage__element-invalid-register',
  },
  listUsers: {
    number: 'admin_manage__element-user-table-item-number-',
    name: 'admin_manage__element-user-table-name-',
    email: 'admin_manage__element-user-table-email-',
    role: 'admin_manage__element-user-table-role-',
    excludeUserButton: 'admin_manage__element-user-table-remove-',
    warnning,
  },
};

const create6Users = 6;

describe('Teste da Página de Admin', () => {
  const mockUsers = [];
  populationMockUsers(create6Users, mockUsers);
  console.table(mockUsers);

  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(adminUser));
  });

  test('Testa se Exitem todos os data-testid requisitados', async () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>,
    );

    await waitFor(() => {
      const userCards = screen.getAllByTestId('userCard');
      userCards.forEach((_user, index) => {
        Object.values(datatestids.listUsers).forEach((value) => {
          if (value === warnning) return;
          const SUT = screen.getByTestId(`${value}${index + 1}`);
          expect(SUT).toBeInTheDocument();
        });
      });
      const warnningExclude = screen
        .getAllByTestId(warnning);
      expect(warnningExclude.length).toEqual(userCards.length);
    });

    Object.values(datatestids.form).forEach((value) => {
      const SUT = screen.getByTestId(value);
      expect(SUT).toBeInTheDocument();
    });
  });

  test('Testa se existem os campos esperados para o Header', () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>,
    );

    const management = screen.getByText('GERENCIAR USUÁRIOS');
    const userName = screen.getByText(adminUser.name);
    const logout = screen.getByText('Sair');

    expect(management).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  test('Testa se o botão da página esta desabilitado', () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>,
    );
    const registerButton = screen.getByTestId(datatestids.form.createButton);
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toHaveProperty('disabled', true);
  });

  test('Espera que se os campos forem preenchidos o botaão estará habilitado', () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>,
    );

    const emailInput = screen.getByTestId(datatestids.form.email);
    const nameInput = screen.getByTestId(datatestids.form.name);
    const passwordInput = screen.getByTestId(datatestids.form.password);
    const roleSelect = screen.getByTestId(datatestids.form.role);
    const registerButton = screen.getByTestId(datatestids.form.createButton);

    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toHaveProperty('disabled', true);

    userEvent.type(emailInput, mockUsers[0].randomEmail);
    userEvent.type(nameInput, mockUsers[0].randomName);
    userEvent.type(passwordInput, mockUsers[0].randomPassword);
    userEvent.selectOptions(roleSelect, mockUsers[0].role);

    expect(registerButton).toHaveProperty('disabled', false);
  });

  test('Espera-se que os campos sejam limpos apos o click de adicionar usuário',
    async () => {
      render(
        <Router>
          <AdminUsersProvider>
            <AdminPage />
          </AdminUsersProvider>
        </Router>,
      );

      const emailInput = screen.getByTestId(datatestids.form.email);
      const nameInput = screen.getByTestId(datatestids.form.name);
      const passwordInput = screen.getByTestId(datatestids.form.password);
      const roleSelect = screen.getByTestId(datatestids.form.role);
      const registerButton = screen.getByTestId(datatestids.form.createButton);

      expect(registerButton).toBeInTheDocument();

      userEvent.type(emailInput, mockUsers[0].randomEmail);
      userEvent.type(nameInput, mockUsers[0].randomName);
      userEvent.type(passwordInput, mockUsers[0].randomPassword);
      userEvent.selectOptions(roleSelect, mockUsers[0].role);

      userEvent.click(registerButton);

      await waitFor(() => {
        screen.getAllByTestId('userCard');
      });

      expect(emailInput).toHaveTextContent('');
      expect(nameInput).toHaveTextContent('');
      expect(passwordInput).toHaveTextContent('');
      expect(roleSelect).toHaveTextContent('customer');
    });

  test('Espera-se que após os usuários serem criados eles estejam na lista de Users',
    async () => {
      render(
        <Router>
          <AdminUsersProvider>
            <AdminPage />
          </AdminUsersProvider>
        </Router>,
      );

      const emailInput = screen.getByTestId(datatestids.form.email);
      const nameInput = screen.getByTestId(datatestids.form.name);
      const passwordInput = screen.getByTestId(datatestids.form.password);
      const roleSelect = screen.getByTestId(datatestids.form.role);

      mockUsers.forEach(async (user) => {
        console.log(`rodando com user ${user.randomName}`);
        userEvent.type(emailInput, user.randomEmail);
        userEvent.type(nameInput, user.randomName);
        userEvent.type(passwordInput, user.randomPassword);
        userEvent.selectOptions(roleSelect, user.role);

        await waitFor(() => {
          const registerButton = screen.getByTestId(datatestids.form.createButton);
          expect(registerButton).toHaveProperty('disable', false);
          expect(registerButton).toBeInTheDocument();
          userEvent.click(registerButton);
        });

        await waitFor(() => {
          const userEmail = screen.findByText(user.randomEmail);
          const userName = screen.findByText(user.randomName);

          expect(userEmail).toBeInTheDocument();
          expect(userName).toBeInTheDocument();
        });
      });
    });
});
