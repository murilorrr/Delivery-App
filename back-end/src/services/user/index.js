const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');

module.exports = {
  create: (user) => createUser(user),
  getAll: (role) => getAllUsers(role),
};