require('express-async-errors');
const express = require('express');
const cors = require('cors');
const { errorMiddleware } = require('../middlewares');
const { productsRoute, sellerRoute, loginRoute, userRoute, salesRoute } = require('../routes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(salesRoute);
app.use(productsRoute);
app.use(userRoute);
app.use(sellerRoute);
app.use(loginRoute);

app.use(errorMiddleware);

module.exports = app;
