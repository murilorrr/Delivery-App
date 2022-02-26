const { getByEmail } = require('../../services/user');

const getAllUsers = async (req, res, next) => {
  const { email } = req.params;
  try {
    const users = await getByEmail(email);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsers;