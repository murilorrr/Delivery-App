const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const alreadyExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user || null;
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

  if (password.length < 6 || password.length > 13) {
    throw customizeError(StatusCodes.BAD_REQUEST, '"password" must be greater than 6');
  }
};

const validateLogin = async (email, password) => {
  await validateEmail(email);
  await validatePassword(password);
  
  const users = await alreadyExists(email);

  if (!users) {
    throw customizeError(StatusCodes.NOT_FOUND, 'Invalid fields');
  }

  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  if (users.password === hashPassword) {
    const token = generateJWT({ email });
    return { token };
  }

  return users;
};
  
module.exports = validateLogin;
