const getAllSalesFromUser = require('./getAllFromUser');
const getSalesByIdFromUser = require('./getSalesByIdFromUser');

module.exports = {
  getAll: (userId) => getAllSalesFromUser(userId),
  getById: (userId, orderId) => getSalesByIdFromUser(userId, orderId),
};