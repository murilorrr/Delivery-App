const { Op } = require('sequelize');
const { Sale } = require('../../database/models');

const getAllSalesByUser = async (user) => {
  const products = await Sale.findAll({
    where: {
      [Op.or]: [
        { sellerId: user.id },
        { userId: user.id },
      ],
    },
    include: [{ all: true, nested: true, attributes: { exclude: ['email', 'password'] } }],
    attributes: { exclude: ['user_id', 'seller_id', 'userId', 'sellerId'] },
  });
  
  return products;
};

module.exports = getAllSalesByUser;
