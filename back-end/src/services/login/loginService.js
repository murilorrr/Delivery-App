const { StatusCodes } = require('http-status-codes');
const bcrypt = require("bcrypt");
const Joi = require('joi');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const userSchema = Joi.object({
  email: Joi.string().regex(/\S+@\S+\.\S+/).required(),
  password: Joi.string().min(6).required(),
});

const alreadyExists = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (user) {
    const compare = bcrypt.compareSync(password, user.password);
    if (compare) {
      return user;
    }
    return false;
  }

  return false;
};

const validateLogin = async (email, password) => {
  const { error } = userSchema.validate({ email, password });
  if (error) throw customizeError(StatusCodes.BAD_REQUEST, error.message);
  
  const userFound = await alreadyExists(email, password);
  
  if (!userFound) {
    throw customizeError(StatusCodes.NOT_FOUND, 'Invalid fields');
  }

  const { password: _password, ...userWithoutPassword } = userFound.dataValues;

  const token = generateJWT(userWithoutPassword);

  return { token };
};
  
module.exports = validateLogin;
