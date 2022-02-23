const { getProductByIdService } = require('../../services/products/getProductByIdService');

const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductByIdService({ productId });
  return res.status(200).json(product);
};

module.exports = { getProductByIdController };