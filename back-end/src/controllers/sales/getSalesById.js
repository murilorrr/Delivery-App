const { getById } = require('../../services/sales');

const getAllSales = async (req, res) => {
  const data = req.user;
  const { id } = req.params;
  const sale = await getById(data, id);
  return res.status(200).json(sale);
};

module.exports = getAllSales;
