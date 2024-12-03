const ResponseHandler = require('../handlers/response.handler');
const faqsService = require('../services/faqs.service');

const get = (req, res) => {
  const user = faqsService.get();
  if(user) {
    return ResponseHandler.sendSuccessResponse(res, user);
  } else {
    return ResponseHandler.sendErrorResponse(res, {
      data: undefined,
      status: 404
    });
  }
}

const findFaqByQuestion = (req, res) => {
  const faqIdentifier = req.params.id;
  const singleUser = faqsService.filterByQuestion(faqIdentifier);
  if (singleUser) {
    ResponseHandler.sendSuccessResponse(res, singleUser);
  } else {
    ResponseHandler.sendErrorResponse(res, {
      data: undefined,
      status: 404
    });
  }
}

const FaqController = { get, findFaqByQuestion };

module.exports = FaqController;
