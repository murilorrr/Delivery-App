const { Router } = require('express');
const { createSale, getAllSales, getOrder } = require('../controllers/sales');

const sales = Router();
const { authMiddleware } = require('../middlewares');

sales.post('/customer/sales', createSale);
sales.get('/customer/sales', authMiddleware, getAllSales);
sales.get('/customer/orders/:id', authMiddleware, getOrder);

module.exports = sales;
