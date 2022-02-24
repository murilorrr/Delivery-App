const { StatusCodes } = require('http-status-codes');
const { User } = require('../../database/models');
const { customizeError } = require('../../utils');

const getAllProductsService = async (role) => {
  if (role !== 'admin') throw customizeError(StatusCodes.UNAUTHORIZED, 'Role is not admin');
  const users = await User.findAll();
  return users;
};

module.exports = getAllProductsService;