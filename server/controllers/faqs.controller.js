const ResponseHandler = require('../handlers/response.handler');
const faqsService = require('../services/faqs.service');

const get = (req, res) => {
  const faqs = faqsService.get();
  return ResponseHandler.sendSuccessResponse(res, faqs);

}

const FaqController = { get };

module.exports = FaqController;
