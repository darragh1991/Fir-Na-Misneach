const ResponseHandler = require('../handlers/response.handler');
const { determineLogin } = require('../services/login.seRvice');

const login = (req, res) => {
  const { email, password } = req.body;
  const login = determineLogin(email, password);
  return ResponseHandler.sendSuccessResponse(res, login);
}

const LoginController = { login };

module.exports = LoginController;
