const ResponseHandler = require('../handlers/response.handler');
const database = require('../db/database');

const get = (req, res) => {
  const statuses = database.get();
  ResponseHandler.sendSuccessResponse(res, statuses);
}

const getOne = (req, res) => {
  const statusId = req.params.id;
  const singleUser = database.getById(statusId);
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
