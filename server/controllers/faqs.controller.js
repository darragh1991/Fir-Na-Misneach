const ResponseHandler = require('../handlers/response.handler');
const faqsService = require('../services/faqs.service');

const get = (req, res) => {
  const faqs = faqsService.get();
  console.log('User:', faqs);
  return ResponseHandler.sendSuccessResponse(res, faqs);

}

const FaqController = { get };

module.exports = FaqController;
