const { Sale, Product, User, SalesProduct } = require('../../database/models');

const getSaleById = async (orderId) => {
  const products = await Sale.findOne({
    where: { id: orderId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['email', 'password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['email', 'password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
      { model: SalesProduct, as: 'SalesProduct', through: { attributes: ['quantity'] } },
    ],
    attributes: { exclude: ['user_id', 'seller_id', 'userId', 'sellerId'] },
  });

  return products;
};

module.exports = getSaleById;