<h1 align="center">
  How to contribute
</h1>

# Contributing

Contributions, issues and feature requests are very welcome.

## Docker

If you have docker installed, you can run with:

```sh
docker-compose up
```

## Pre-requisites

- _Node:_ `^14.16.1` or higher.
- _Npm:_ `8.3.0` or higher.
- _Git:_ `2.25.1` or higher.

### Backend Architecture

We decided to follow some MSC to guide our backend architecture. Here is a quick glance of what we expect when of new contributions in the backend project. How we organize our project:

- `/back-end/src`: Source of all back-end;
  - `public`: Is the layer that expose images to front-end;
  - `api`: Here our server is instantiated and identifies the routes and entities;
  - `controller`: Is the layer that takes care of http requests to the server;
  - `database`: Is the layer that provide sequelize staffs and configs
  - `middlewares`: Is a type of controller, but can be reused for authentication or error handling functions for example;
  - `routes`: This layer will tell which endpoint will operate for each controller;
  - `services`: Is the layer that takes care of the application's business rules, it intermediates the information coming from the route to the model;
  - `socket`: Is the layer that care about real-time comunication client-server;
  - `tests`: This layer makes everything, including coffee;
  - `utils`: Here are custom functions to help our application

### Frontend Architecture


 - `public`: This layer has all the static files of the system made available by http;
 - `src`: Source of all front-end code;
   - `components`: Here our components are stored so they can be reused;
   - `contexts`: This layer is responsible for managing the necessary contexts for the application;
   - `fetchs`: This layer has all fetch into your API using axios;
   - `hooks`: In this layer are the most common hooks;
   <!-- - `assets`: This layers concentrate your styles and images; -->
   - `pages`: Folder responsible for storing system pages;
   - `styles`: Here are concentrated the global styles of the application, reuse constants;
   - `tests`: This layer makes everything, including coffee;


> This project has integration with LGTM automated code review


Thanks ❤️
