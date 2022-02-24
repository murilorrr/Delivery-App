const getAllSalesByUser = require('./getAllFromUser');
const getSalesByIdFromUser = require('./getSalesByIdFromUser');
const createSaleService = require('./createSaleService');

module.exports = {
  getAll: (user) => getAllSalesByUser(user),
  getById: (userId, orderId) => getSalesByIdFromUser(userId, orderId),
  createSale: (saleInfo) => createSaleService(saleInfo),
};