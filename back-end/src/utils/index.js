const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');
const decodeJWT = require('./decodeJWT');
const encryptPassword = require('./encryptPassword');

module.exports = {
  generateJWT: (payload) => generateJWT(payload),
  decodeJWT: (token) => decodeJWT(token),
  customizeError: (statusCode, message) => errorHandler(statusCode, message),
  encryptPassword: (password) => encryptPassword(password),
};