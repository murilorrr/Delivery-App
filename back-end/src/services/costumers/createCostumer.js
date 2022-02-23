const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
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

const validateCostumer = async ({ name, email, password, role }) => {
  const { error } = costumerSchema.validate({ name, email, password, role }); 
  if (error) throw customizeError(StatusCodes.BAD_REQUEST, error.message);

  const exists = await alreadyExists(email);
  if (exists) throw customizeError(StatusCodes.CONFLICT, 'User already registered');
};

const createCostumer = async (costumer) => {
  const { name, email, password, role } = costumer;
  console.log(costumer);

  await validateCostumer({ name, email, password, role });
  
  try {
    const token = generateJWT({ name, email, role });
    console.log(token);
  
    await User.create({ name, email, password, role });
    return token;
  } catch (err) {
    throw customizeError(StatusCodes.BAD_REQUEST, err.message);
  }
};

module.exports = createCostumer;