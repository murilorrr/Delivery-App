import React from "react";

import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../App";
// import { Home } from "../pages";
// import Login from '../pages/Login'
// import AdminUsersProvider from "../contexts/adminContext";

import "@testing-library/jest-dom";

describe("1 - Teste de Rotas", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  test("Rota / deve redicionar para /login", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe("/login");
  });

  test("Rota /register deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/register");
    expect(history.location.pathname).toBe("/register");
  });

  test("Rota /customer/products deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/customer/products");
    expect(history.location.pathname).toBe("/customer/products");
  });

  test("Rota /customer/checkout deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/customer/checkout");
    expect(history.location.pathname).toBe("/customer/checkout");
  });

  test("Rota /admin/manage deve existir", () => {
    render(
        <Router history={history}>
          <App />
        </Router>
    );
    history.push("/admin/manage");
    expect(history.location.pathname).toBe("/admin/manage");
  });

  test("Rota /customer/orders/:orderId deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/customer/orders/1");
    expect(history.location.pathname).toBe("/customer/orders/1");
  });

  test("Rota /seller/orders deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/seller/orders");
    expect(history.location.pathname).toBe("/seller/orders");
  });

  test("Rota /customer/orders deve existir", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/customer/orders");
    expect(history.location.pathname).toBe("/customer/orders");
  });

  test("Rota quaisquer outras rotas devem redirecionar para /notFound", () => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/c251fsafsd1423qwfa");
    expect(history.location.pathname).toBe("/notFound");
  });
});
