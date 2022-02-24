const crypto = require('crypto');
const { User } = require('../../database/models');
const { generateJWT } = require('../../utils');

const alreadyExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user || null;
};

const validateEmail = async (email) => {
  const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!email) {
    return { message: '"email" is required', code: 400 };
  }

  if (!reg.test(email)) {
      return {
        message: '"email" must be a valid email',
        code: 400,
      }; 
  }
};

const validatePassword = (password) => {
  if (!password) {
    return {
      message: '"password" is required',
      code: 400,
    };
  }
  if (password.length < 6 || password.length > 13) {
    return {
      message: '"password" length must be 6 characters long',
      code: 400,
    };
  }
};

const validateLogin = async (email, password) => {
  const loginEmail = await validateEmail(email);
  const loginPassword = await validatePassword(password);
  
  if (loginEmail !== undefined) return loginEmail;
  
  if (loginPassword !== undefined) return loginPassword;
  
  const users = await alreadyExists(email);

  if (!users) return { message: 'Invalid fields', code: 404 };
  
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  if (users.password === hashPassword) {
    const token = generateJWT({ email });
    return { token };
  }

  return users;
};
  
module.exports = validateLogin;
