const bcrypt = require("bcrypt");
const salt = process.env.SALT;

const hashPassword = (password) => {
  const hashed = bcrypt.hashSync(password, Number(salt));
  return hashed;
}

module.exports = hashPassword;