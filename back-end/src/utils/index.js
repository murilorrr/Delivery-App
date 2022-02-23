const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');

module.exports = {
  generateJWT: (payload) => generateJWT(payload),
  decodeJWT: (_token) => {},
  customizeError: (code, msg) => errorHandler(code, msg),
};