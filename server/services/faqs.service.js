const faqsDataStore = require('../db/faqs.json');

const faqRepository = {
  get() {
    return faqsDataStore.map((faq, index) =>
       ({
        id: index,
        question: faq.q,
        answer: faq.a
      }));
  },
}

module.exports = faqRepository;
