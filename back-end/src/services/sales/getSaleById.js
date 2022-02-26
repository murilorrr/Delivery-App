const { Sale } = require('../../database/models');

const getSaleById = async (orderId) => {
  const products = await Sale.findAll({ where: { id: orderId } });

  return products;
};

module.exports = getSaleById;