const { StatusCodes } = require('http-status-codes');
const { createAnyUser } = require('../../services/admin');

const createUser = async (req, res, next) => {
  const user = req.body;
  if (!user.role) user.role = 'costumer';
  const { role: agentRole } = req.user;
  try {
    await createAnyUser(user, agentRole);
    return res.status(StatusCodes.CREATED).json({ message: 'user created' });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;