const createLikeAdmin = require('./createLikeAdmin');

module.exports = {
  createAnyUser: (user, agentRole) => createLikeAdmin(user, agentRole),
};