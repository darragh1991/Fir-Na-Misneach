const ResponseHandler = require('../handlers/response.handler');
const userService = require('../services/user.service');

const get = (req, res) => {
  const user = userService.get();
  if(user) {
    return ResponseHandler.sendSuccessResponse(res, user);
  } else {
    return ResponseHandler.sendErrorResponse(res, {
      data: undefined,
      status: 404
    });
  }
}

const getOne = (req, res) => {
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

const UserController = { get, getOne };

module.exports = UserController;
