const { Router } = require('express');
const { createSaleController } = require('../controllers/sales/createSaleController');

const sales = Router();

sales.post('/customer/sales', createSaleController);

module.exports = { sales };
