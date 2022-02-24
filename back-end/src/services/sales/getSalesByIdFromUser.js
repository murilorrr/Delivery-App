const { Op } = require('sequelize');
const { Sale, User } = require('../../database/models');

const getSalesByIdFromUser = async (user, orderId) => {
  const actualUser = await User.findOne({ where: { name: user.name } });

  const products = await Sale.findAll({ where: {
    [Op.and]: [{ id: orderId }, { userId: actualUser.id }],
  } });

  return products;
};

module.exports = getSalesByIdFromUser;