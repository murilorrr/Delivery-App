const { Sale } = require('../../database/models');
const { Error } = require('../../utils/customError');

const createSaleService = async (saleInfo) => {
  const {
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    userId
  } = saleInfo

  const isInvalid = [ sellerId, totalPrice, deliveryAddress, deliveryNumber, status, userId ]
    .some((item) => typeof item === 'undefined')
  if (isInvalid) throw new Error('invalid data', 422);

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