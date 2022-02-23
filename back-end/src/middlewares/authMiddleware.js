const status = require('http-status-codes').StatusCodes;
const JWT = require('jsonwebtoken');
const { customizeError, decodeJWT } = require('../utils');

const secret = process.env.JWT_SECRET || 'segredinho';

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    JWT.verify(authorization, secret);
    const data = decodeJWT(authorization);
    req.user = data;
  } catch (err) {
    if (!authorization) throw customizeError(status.UNAUTHORIZED, 'Token not found');
    throw customizeError(status.UNAUTHORIZED, 'Expired or invalid token');
  }
  return next();
};

module.exports = authMiddleware;