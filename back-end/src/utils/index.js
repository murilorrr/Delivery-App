const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');

module.exports = {
  generateJWT: () => generateJWT,
  decodeJWT: (_token) => {},
  customizeError: (code, msg) => errorHandler(code, msg),
};