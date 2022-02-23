const { StatusCodes } = require('http-status-codes');
const { create } = require('../../services/customer');

const createCostumer = async (req, res, next) => {
  const costumer = req.body;
  costumer.role = 'costumer';
  try {
    const result = await create(costumer);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = createCostumer;