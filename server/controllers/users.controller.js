const ResponseHandler = require('../handlers/response.handler');
const database = require('../db/database');

const get = function(req, res) {
  const statuses = database.usersData.get();
  ResponseHandler.sendSuccessResponse(res, statuses);
}

const getOne = function(req, res) {
  const statusId = req.params.id;
  database.usersData.get().find(u => u.id === statusId);
  if (status) {
    ResponseHandler.sendSuccessResponse(res, { status });
  } else {
    ResponseHandler.sendErrorResponse(res, {
      data: undefined,
      message: 'Status was not found',
      status: 404
    });
  }
}

const UserController = { get, getOne };

module.exports = UserController;
