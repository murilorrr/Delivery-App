const { getAll } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const { id } = req.user;
  const products = await getAll(id);
  return res.status(200).json(products);
};

module.exports = getAllSales;
