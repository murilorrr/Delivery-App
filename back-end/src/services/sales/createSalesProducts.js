const { salesProducts } = require('../../database/models');

const createSalesProductsService = async ({ saleId, cart }) => {
  const cartToSalesProducts = cart.map((product) => ({
    saleId,
    productId: product.id,
    quantity: product.quantity,
  }));

  const result = await salesProducts.bulkCreate(cartToSalesProducts);

  return result;
};

module.exports = createSalesProductsService;