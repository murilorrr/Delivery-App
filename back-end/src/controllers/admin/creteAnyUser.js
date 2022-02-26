const { StatusCodes } = require('http-status-codes');
const { createAnyUser } = require('../../services/admin');

const createUser = async (req, res, next) => {
  const user = req.body;
  if (!user.role) user.role = 'costumer';
  const { role: agentRole } = req.user;
  try {
    const result = await createAnyUser(user, agentRole);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;