require('dotenv').config({path: '../.env'});

const secret = process.env.JWT_SECRET;


module.exports = secret;