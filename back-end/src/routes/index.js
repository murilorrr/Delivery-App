const userRoute = require('./userRoute');
const productsRoute = require('./products');
const sellerRoute = require('./sellerRoute');
const loginRoute = require('./login');
const sales = require('./sales');

module.exports = {
  userRoute,
  productsRoute,
  sellerRoute,
  loginRoute,
  salesRoute: sales,
};