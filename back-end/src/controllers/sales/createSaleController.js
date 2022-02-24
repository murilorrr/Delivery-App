const { createSale } = require('../../services/sales');

const createSaleController = async (req, res) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
  const { id: userId } = req.user || { id: 3 };

  const sale = await createSale({
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    userId,
  });
  return res.status(201).json(sale);
};

module.exports = createSaleController;