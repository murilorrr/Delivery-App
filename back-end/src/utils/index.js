const generateJWT = require('./generateJWT');
const errorHandler = require('./errorhandler');

module.exports = {
  generateJWT,
  customizeError: (code, msg) => errorHandler(code, msg),
};