const { createSaleService } = require('../../services/sales/createSaleService');

const createSaleController = async (req, res) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
  const { id: userId } = req.user;

  const sale = await createSaleService({ sellerId, totalPrice, deliveryAddress, deliveryNumber, status, userId });
  return res.status(201).json(sale);
}

module.exports = { createSaleController };