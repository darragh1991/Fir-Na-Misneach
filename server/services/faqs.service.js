const faqsDataStore = require('../db/faqs.json');

const faqRepository = {
  get() {
    return faqsDataStore.map((faq, index) =>
       ({
        id: index,
        question: faq.question,
        answer: faq.answer
      }));
  },
}

module.exports = faqRepository;
