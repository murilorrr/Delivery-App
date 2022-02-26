const getAllSales = require('./getAllSales');
const getSalesById = require('./getSalesById');
const getOrder = require('./getSale');
const createSaleController = require('./createSaleController');

module.exports = {
  getAllSales,
  getSalesById,
  getOrder,
  createSale: createSaleController,
};