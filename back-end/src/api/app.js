require('express-async-errors');
const express = require('express');
const { errorHandler } = require('../middlewares/errorHandler');
const { products } = require('../routes/products');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(products);
app.use(errorHandler);

module.exports = app;
