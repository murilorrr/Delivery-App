require('express-async-errors');
const express = require('express');
const { errorMiddleware } = require('../middlewares');
const { productsRoute, costumerRoute } = require('../routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(productsRoute);
app.use(costumerRoute);
app.use(errorMiddleware);

module.exports = app;
