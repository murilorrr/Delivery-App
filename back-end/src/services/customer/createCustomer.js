const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
const { customizeError } = require('../../utils');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const costumerSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const alreadyExists = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data || null;
};

const validateCustomer = async ({ name, email, password, role }) => {
  const { error } = costumerSchema.validate({ name, email, password, role }); 
  if (error) throw customizeError(StatusCodes.BAD_REQUEST, error.message);

  const exists = await alreadyExists(email);
  if (exists) throw customizeError(StatusCodes.CONFLICT, 'User already registered');
};

const createCustomer = async (customer) => {
  const { name, email, password, role } = customer;

  await validateCustomer({ name, email, password, role });
  
  try {
    const token = generateJWT({ name, email, role });

    const hashPassword = crypto.createHash('md5').update(password).digest('hex');
  
    await User.create({ name, email, password: hashPassword, role });
    return token;
  } catch (err) {
    throw customizeError(StatusCodes.BAD_REQUEST, err.message);
  }
};

module.exports = createCustomer;