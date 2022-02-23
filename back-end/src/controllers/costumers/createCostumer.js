const { StatusCodes } = require('http-status-codes');
const constumerService = require('../../services/admin/index');

const createCostumer = async (req, res, next) => {
  const costumer = req.body;
  try {
    const result = await constumerService.create(costumer);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = createCostumer;