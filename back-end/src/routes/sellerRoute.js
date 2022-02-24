const { Router } = require('express');
const { getAllSales, getSalesById } = require('../controllers/sales');
const { authMiddleware } = require('../middlewares');

const sellerRoute = Router();

sellerRoute.get('/seller/orders', authMiddleware, getAllSales);

sellerRoute.get('/seller/orders/:orderId', authMiddleware, getSalesById);

module.exports = sellerRoute;