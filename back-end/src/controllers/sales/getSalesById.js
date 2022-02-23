const { getById } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const { id } = req.user;
  const { orderId } = req.params;
  const products = await getById(id, orderId);
  return res.status(200).json(products);
};

module.exports = getAllSales;
