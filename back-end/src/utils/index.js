const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');

module.exports = {
  generateJWT: (payload) => generateJWT(payload),
  decodeJWT: (_token) => {},
  customizeError: (statusCode, message) => errorHandler(statusCode, message),
};