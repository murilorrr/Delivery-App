const { Router } = require('express');
const { createSale, getAllSales } = require('../controllers/sales');

const sales = Router();
const { authMiddleware } = require('../middlewares');

sales.post('/customer/sales', createSale);
sales.get('/customer/sales', authMiddleware, getAllSales);

module.exports = sales;
