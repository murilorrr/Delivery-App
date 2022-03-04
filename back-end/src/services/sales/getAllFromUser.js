const { Op } = require('sequelize');
const { Sale, User } = require('../../database/models');

const getAllSalesByUser = async (user) => {
  const actualUser = await User.findOne({
    where: { name: user.name },
  });

  const sales = await Sale.findAll({
    where: {
      [Op.or]: [{ sellerId: actualUser.id }, { userId: actualUser.id }],
    },
    attributes: { exclude: ['user_id', 'seller_id'] },
  });

  return sales;
};

module.exports = getAllSalesByUser;
