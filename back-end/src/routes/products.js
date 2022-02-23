const { Router } = require('express');
const { getAllProductsController } = require('../controllers/products/getAllProductsController');
const { getProductByIdController } = require('../controllers/products/getProductByIdController');

const products = Router();

products.get('/customer/products', getAllProductsController);

products.get('/customer/products/:productId', getProductByIdController);

module.exports = { products };
