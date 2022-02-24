const getAllSalesFromUser = require('./getAllFromUser');
const getSalesByIdFromUser = require('./getSalesByIdFromUser');
const createSaleService = require('./createSaleService');

module.exports = {
  getAll: (userId) => getAllSalesFromUser(userId),
  getById: (userId, orderId) => getSalesByIdFromUser(userId, orderId),
  createSale: (saleInfo) => createSaleService(saleInfo),
};