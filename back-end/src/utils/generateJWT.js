require('dotenv').config();
const JWT = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const generateJWT = (payload) => {
  const JWTconfig = {
    algorithm: 'HS256',
    expiresIn: '10h',
  };
  
  const token = JWT.sign(payload, secret, JWTconfig);

  return token;
};

module.exports = generateJWT;