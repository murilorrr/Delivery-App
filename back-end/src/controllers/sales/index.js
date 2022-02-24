const getAllSales = require('./getAllSales');
const getSalesById = require('./getSalesById');
const createSaleController = require('./createSaleController');

module.exports = {
  getAllSales,
  getSalesById,
  createSale: createSaleController,
};