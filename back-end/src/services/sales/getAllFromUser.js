const { Sale, User } = require('../../database/models');

const getAllSalesByUser = async (user) => {
  const products = await Sale.findAll({ where: { sellerId: user.id } });
  
  return products;
};

module.exports = getAllSalesByUser;