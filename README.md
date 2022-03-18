# Desafio-Tecnico-Ebytr Monorepo

#### badges preview LGTM


#### Images preview app

<p align="center">A modern delivery App</p>

<p align="center"><i> "How to safe a Food?" - Lay Herman </i> </p>

<p align="center">
  <a href="#blush-why">Why</a> •
  <a href="#zap-tech-stack">Tech Stack</a> •
  <a href="#handshake-contributing">Contributing</a> •
  <a href="https://github.com/murilorsv14">About Me</a>
</p>

## :blush: **Why?**

<h4>The context:</h4>
Tereza's beer distributor is getting computerized! rocket Your business, previously focused on a specific location in the city, started to receive a massive amount of orders from other points, expanding its operations, especially via delivery. This is all thanks to the excellent price of drinks and service from the sales team.

Now the distributor has some points of sale in the city to speed up service in these areas. Each point of sale, in turn, has a responsible salesperson.

As her old system, which was a set of spreadsheets, no longer meets the business needs, as it generates a lot of maintenance, Dona Tereza turned to her team of developers with an idea for an application that could speed up the lives of her team and people. who buy your products. The app needs:

* Access via login: both customers and salespeople, as well as Tereza herself, who manages the system, must have access to the application via login, but for different functions:(1) The customer, who buys from the list of products; (2) The selling person, who approves, prepares and delivers; (3) The admin person, who manages who uses the application;

* Make communication between customers and salespeople: the customer person places the order via "shopping cart" and the salesperson approves, prepares and sends this order. When the product is received by the purchaser, that person marks the order as "received". Both must have details about their orders;

* Work in real-time: Orders/order details screens should be updated in real-time as these interactions take place. If the customer person places the order, it should appear to the sales person in their order dash without them needing to refresh the page. The customer, in turn, must have the information about their order also updated in real time, that is, have information if the order is being prepared or if it has already left for delivery;

The proposal enchanted, but Dona Tereza wants to see the business in action! She's willing to pay for a project MVP, and you've closed the deal with a 10-day turnaround time.

Now it's hands to work! Let's start?

## :zap: **Tech Stack**

<h1 align="center">
  <img src="https://coinerblog.com/wp-content/uploads/2019/10/How-to-Build-A-Well-Structured-3-tier-Architecture-MERN-Stack%E2%80%8A-ES6-Step-by-Step-Guide.png" alt="Stack" height="200" width="300">
  <br>
</h1>

- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Context API](https://reactjs.org/docs/context.html)
- [Eslint](https://eslint.org/)
- [Styled Components](https://styled-components.com/)
- [PM2](https://pm2.keymetrics.io/)

and much more...

## Application flow
- **Fluxo Comum** que compreende: 
  - (1) Tela de Login (`01login.test`);
  - (2) Tela de Registro (`02register.test`).

- **Fluxo do Cliente** que compreende: : 
  - (3) Tela de Produtos (`03customer_products.test`); 
  - (4) Tela de Checkout (`04customer_checkout.test`); 
  - (5) Tela de Pedidos (`05customer_orders.test`); 
  - (6) Tela de Detalhes do Pedido (`06customer_order_details.test`).

- **Fluxo da Pessoa Vendedora** que compreende: 
  - (7) Tela de Pedidos (`07seller_orders.test`); 
  - (8) Tela de Detalhes/Controle do Pedido (`08seller_order_details.test`).

- **Validação do Status do Pedido** que compreende: 
  - (9) Teste de status sem atualização em tempo real (`09customer_seller_status_sync.test`); 
  - (10) Teste de status com atualização em tempo real (`10customer_seller_socket_status_sync.test`).

- **Fluxo da Pessoa Administradora** que compreende: 
  - (11) Tela de gerenciamento de usuários (`11admin_manage_users.test`).

## 🏃 Getting started

### Pre-requisites

- _Node:_ `^14.16.1` or higher.
- _Npm:_ `8.3.0` or higher.
- _Git:_ `2.25.1` or higher.
- _Docker(Optional):_ `20.10.12` or higher.

Clone the project from Github :

```sh
$ git clone git@github.com:murilorsv14/Delivery-App.git
$ cd Delivery-App
```

### :whale:Docker Method

If you have docker installed, you can run with:

```sh
$ docker-compose up
```

Pre-requisites
If everything is ok, you will be able to open at:

```bash
http://localhost:3000
```

### Default method

#### Install backend and frontend folder dependencies and start react app and node server:

```sh
$ cd src/back-end
$ npm install
$ npm start
$ cd src/front-end or ../back-end
$ npm install
$ npm start
```

If everything is ok, you will be able to open at:

```bash
http://localhost:3000
```

## 👣 Next steps

- deploy on heroku
- feature: quantity item in Products Page
- improve tests
- implements atomic design in Front-end

## :handshake: **Contributing**

This project is for study purposes too, so send me an email telling me what you are doing and why you are doing it, teach me what you know

All kinds of contributions are very welcome and appreciated!

- ⭐️ Star the project
- 🐛 Find and report issues
- 📥 Submit PRs to help solve issues or add features
- ✋ Influence the future of Delivery-App with feature requests

To learn how to contribute and a little more about the implemented architecture, read the [Contributing Guide](/CONTRIBUTION.md) before making the pull request.
