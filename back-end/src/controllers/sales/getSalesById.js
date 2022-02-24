const { getById } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const data = req.user;
  const { orderId } = req.params;
  const sales = await getById(data, orderId);
  return res.status(200).json(sales);
};

module.exports = getAllSales;
