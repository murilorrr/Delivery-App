const bcrypt = require("bcrypt");
const salt = process.env.SALT;

const hashPassword = (password) => {
  var hashed = bcrypt.hashSync(password, salt); // GOOD
  return hashed;
}

module.exports = hashPassword;