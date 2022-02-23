require('express-async-errors');
const express = require('express');
const { errorMiddleware } = require('../middlewares');
const { productsRoute } = require('../routes');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(productsRoute);
app.use(errorMiddleware);

module.exports = app;
