const sendSuccessResponse = (res, responseOptions = { data: undefined, message: 'OK' }) => {
  const response = { data: responseOptions };
  res.status(200).json(response);
}
const sendErrorResponse = (res, options = {
  data: undefined,
  message: 'Something went wrong',
  status: 500
}) => {
  const response = { message: options.message, data: options.data };
  res.status(options.status).json(response);
}

const ResponseHandler = {
  sendSuccessResponse,
  sendErrorResponse
}

module.exports = ResponseHandler;
