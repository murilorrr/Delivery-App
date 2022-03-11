import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Products } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from '../../contexts/cartContext';

const datatestids = {
  header: {
    products: "customer_products__element-navbar-link-products",
    orders: "customer_products__element-navbar-link-orders",
    fullName: "customer_products__element-navbar-user-full-name",
    exit: "customer_products__element-navbar-link-logout",
  },
  card: {
    price: "customer_products__element-card-price-",
    img: "customer_products__img-card-bg-image-",
    title: "customer_products__element-card-title-",
    removeButtom: "customer_products__button-card-rm-item-",
    quantity: "customer_products__input-card-quantity-",
    addButtom: "customer_products__button-card-add-item-",
  },
  cartButton: "customer_products__button-cart",
};

const localStorageUserMock = {
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  role: "customer",
};

const clickManyTimes = (button, times) => {
  for (let index = 0; index < times; index++) {
    userEvent.click(button);
  }
};

describe("Teste da Página de Produtos", () => {
  beforeEach(() => {
    localStorage.setItem("user", JSON.stringify(localStorageUserMock));
  });

  test("Testa se o Header da página de Produtos possui todos os datatestids", () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    Object.values(datatestids.header).map((value) => {
      const SUT = screen.getByTestId(value);
      expect(SUT).toBeInTheDocument();
    });
  });

  test("Testa se o nome do cliente esta correto", () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    const fullName = screen.getByTestId(datatestids.header.fullName);
    expect(fullName).toBeInTheDocument();
    expect(fullName.innerHTML).toEqual(localStorageUserMock.name);
  });

  test("Testa se há cards de produtos no body com todos os data-testid requisitados", async () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    await waitFor(() => {
      const productsCards = screen.getAllByTestId("productCard");
      productsCards.map((_product, index) => {
        Object.values(datatestids.card).map((value) => {
          const SUT = screen.getByTestId(`${value}${index + 1}`);
          expect(SUT).toBeInTheDocument();
        });
      });
    });
  });

  test("Testa se é possivel aumentar e diminuir a quantidade de um produto", async () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    let productsCards;

    await waitFor(() => {
      productsCards = screen.getAllByTestId("productCard");
    });

    const addButtom = screen.getByTestId(`${datatestids.card.addButtom}1`);
    const removeButtom = screen.getByTestId(
      `${datatestids.card.removeButtom}1`
    );
    const quantity = screen.getByTestId(`${datatestids.card.quantity}1`);

    expect(quantity.value).toBe("0");

    clickManyTimes(addButtom, 10);
    expect(quantity.value).toBe("10");

    clickManyTimes(removeButtom, 9);
    expect(quantity.value).toBe("1");
  });

  test("Testa se é possivel ver o carrinho de compras", async () => {
    render(
      <Router>
        <CartContextProvider>
          <Products />
        </CartContextProvider>
      </Router>
    );

    await waitFor(() => {
      screen.getAllByTestId("productCard");
    });

    const cartButton = screen.getByTestId(datatestids.cartButton);
    const addButtom = screen.getByTestId(`${datatestids.card.addButtom}1`);
    const quantity = screen.getByTestId(`${datatestids.card.quantity}1`);
    expect(cartButton).toHaveProperty('disabled', true);

    expect(quantity.value).toBe("0");

    clickManyTimes(addButtom, 1);
    expect(quantity.value).toBe("1");

    await waitFor(() => {
      expect(cartButton).toHaveProperty('disabled', false);
    });

  });
});
