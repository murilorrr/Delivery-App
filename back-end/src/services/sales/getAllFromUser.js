const { Sale, User } = require('../../database/models');

const getAllSales = async (user) => {
  const actualUser = await User.findOne({ where: { name: user.name } });

  const products = await Sale.findAll({ where: { userId: actualUser.id } });
  
  return products;
};

module.exports = getAllSales;