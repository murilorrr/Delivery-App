const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');
const decodeJWT = require('./decodeJWT');
const encryptPassword = require('./encryptPassword');
const getSecret = require('./getSecret')

module.exports = {
  generateJWT: (payload) => generateJWT(payload),
  decodeJWT: (token) => decodeJWT(token),
  customizeError: (statusCode, message) => errorHandler(statusCode, message),
  encryptPassword: (password) => encryptPassword(password),
  getSecret: getSecret,
};