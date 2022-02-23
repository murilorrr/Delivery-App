const { getAllProductsService } = require('../../services/products/getAllProductsService');

const getAllProductsController = async (_req, res) => {
  const products = await getAllProductsService();
  return res.status(200).json(products);
};

module.exports = { getAllProductsController };
