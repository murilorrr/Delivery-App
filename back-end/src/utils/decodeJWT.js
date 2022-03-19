const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (token) => {
  const decoded = JWT.verify(token, secret);
  const result = decoded;
  return result;
};