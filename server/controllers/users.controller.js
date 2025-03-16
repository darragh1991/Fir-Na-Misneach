const ResponseHandler = require('../handlers/response.handler');
const userService = require('../services/users.service');

const get = (req, res) => {
  const user = userService.get();
  return ResponseHandler.sendSuccessResponse(res, user);
}

const getById = (req, res) => {
  const statusId = req.params.id;
  const singleUser = userService.getById(statusId);
  if (singleUser) {
    ResponseHandler.sendSuccessResponse(res, singleUser);
  } else {
    ResponseHandler.sendErrorResponse(res, {
      data: undefined,
      status: 404
    });
  }
}

const UserController = { get, getById };

module.exports = UserController;
