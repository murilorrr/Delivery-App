const { Router } = require('express');
const { getAllProductsController } = require('../controllers/products/getAllProductsController');

const products = Router();

products.get('/customer/products', getAllProductsController);

products.get('/customer/products/:productId');

module.exports = { products };
