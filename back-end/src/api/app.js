require('express-async-errors');
const express = require('express');
const { errorHandler } = require('../middlewares/errorHandler');
const { products } = require('../routes/products');
const { sales } = require('../routes/sales');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());
app.use(products);
app.use(sales);
app.use(errorHandler);

module.exports = app;
