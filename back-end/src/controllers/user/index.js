const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');

module.exports = {
  create: () => createUser,
  getAll: () => getAllUsers,
};