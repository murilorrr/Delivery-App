import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdminPage } from "../../pages";
import { faker } from "@faker-js/faker";
import { BrowserRouter as Router } from "react-router-dom";
import { generateJWT } from "../../../../back-end/src/utils";
import AdminUsersProvider from "../../contexts/adminContext";

const token = generateJWT({
  email: "adm@deliveryapp.com",
  name: "Delivery App Admin",
  role: "administrator",
});

const adminUser = {
  email: "adm@deliveryapp.com",
  name: "Delivery App Admin",
  role: "administrator",
  token,
};

const factoryUser = () => {
  const roles = ["administrator", "seller", "customer"];
  const randomRole = Math.floor(Math.random() * 3);

  let randomName = "";
  while (randomName.length < 13) {
    randomName = faker.name.findName();
  }

  const splitedName = randomName.split(" ");

  const randomEmail = faker.internet.email(splitedName[0], splitedName[1]);
  const randomPassword = faker.random.alphaNumeric(9);
  const role = roles[randomRole];
  const userFake = { randomName, randomEmail, randomPassword, role };

  return userFake;
};

const populationMockUsers = (numberOfUsers, array) => {
  for (let index = 0; index < numberOfUsers; index++) {
    array.push(factoryUser());
  }
};

const datatestids = {
  form: {
    createButton: "admin_manage__button-register",
    password: "admin_manage__input-password",
    name: "admin_manage__input-name",
    email: "admin_manage__input-email",
    role: "admin_manage__select-role",
    warnning: "admin_manage__element-invalid-register",
  },
  listUsers: {
    number: "admin_manage__element-user-table-item-number-",
    name: "admin_manage__element-user-table-name-",
    email: "admin_manage__element-user-table-email-",
    role: "admin_manage__element-user-table-role-",
    excludeUserButton: "admin_manage__element-user-table-remove-",
    warnning: "admin_manage__element-invalid-exclude",
  },
};

describe("Teste da Página de Admin", () => {
  const mockUsers = [];
  populationMockUsers(6, mockUsers);
  console.table(mockUsers);

  beforeEach(() => {
    localStorage.setItem("user", JSON.stringify(adminUser));
  });

  test("Testa se o botão da página esta desabilitado", () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>
    );
    const registerButton = screen.getByTestId(datatestids.form.createButton);
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toHaveProperty('disabled', true);
  });

  test("Espera que se os campos forem preenchidos o botaão estará habilitado", () => {
    render(
      <Router>
        <AdminUsersProvider>
          <AdminPage />
        </AdminUsersProvider>
      </Router>
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
});
