const { Sale } = require('../../database/models');

const createSaleService = async ({
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
  userId,
}) => {
  const { dataValues: sale } = await Sale.create({
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status,
    userId,
  });

  return sale;
};

module.exports = { createSaleService };