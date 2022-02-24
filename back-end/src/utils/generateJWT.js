const JWT = require('jsonwebtoken');

const generateJWT = (payload) => {
  const SECRET = process.env.JWT_SECRET || 'segredinho';
  const JWTconfig = {
    algorithm: 'HS256',
    expiresIn: '10h',
  };
  
  const token = JWT.sign(payload, SECRET, JWTconfig);

  return token;
};

module.exports = generateJWT;