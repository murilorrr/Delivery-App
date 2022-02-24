const crypto = require('crypto');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const alreadyExists = async (email, password) => {
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  const user = await User.findOne({ where: { [Op.and]: [{ email }, { password: hashPassword }] } });

  return user;
};

const validateEmail = async (email) => {
  const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!email) throw customizeError(StatusCodes.BAD_REQUEST, '"email" is required');
  if (!reg.test(email)) {
    throw customizeError(StatusCodes.BAD_REQUEST, '"email" must be a valid email');
}
};

const validatePassword = (password) => {
  if (!password) throw customizeError(StatusCodes.BAD_REQUEST, '"password" is required');

  if (password.length < 6 /* || password.length > 13 */) {
    throw customizeError(StatusCodes.BAD_REQUEST, '"password" must be greater than 6');
  }
};

const validateLogin = async (email, password) => {
  await validateEmail(email);
  await validatePassword(password);
  
  const userFound = await alreadyExists(email, password);

  if (!userFound) {
    throw customizeError(StatusCodes.NOT_FOUND, 'Invalid fields');
  }

  const { password: _password, ...userWithoutPassword } = userFound.dataValues;

  const token = generateJWT(userWithoutPassword);

  return { token };
};
  
module.exports = validateLogin;
