const { Router } = require('express');
const { getAllSales, getSalesById } = require('../controllers/sales');
const { authMiddleware } = require('../middlewares');

const sallerRoute = Router();

sallerRoute.get('/seller/orders', authMiddleware, getAllSales);

sallerRoute.get('/seller/orders/:orderId', authMiddleware, getSalesById);

module.exports = sallerRoute;