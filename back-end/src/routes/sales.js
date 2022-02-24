const { Router } = require('express');
const { createSale } = require('../controllers/sales');

const sales = Router();

sales.post('/customer/sales', createSale);

module.exports = sales;
