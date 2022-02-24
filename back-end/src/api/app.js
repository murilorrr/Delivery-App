require('express-async-errors');
const express = require('express');
const { sales } = require('../routes/sales');
const { errorMiddleware } = require('../middlewares');
const { productsRoute, sallerRoute, loginRoute, userRoute } = require('../routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(sales);
app.use(productsRoute);
app.use(userRoute);
app.use(sallerRoute);
app.use(loginRoute);

app.use(errorMiddleware);

module.exports = app;
