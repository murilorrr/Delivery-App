const { loginService } = require('../../services/login');

const SUCESS_200 = 200;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await loginService(email, password);

    if (result.code) return res.status(result.code).json(result.message);
    
    return res.status(SUCESS_200).json(result);
  } catch (err) {
    console.log(err.erro);
    next(err);
  }
};

module.exports = login;
