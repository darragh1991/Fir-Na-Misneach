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
  getById(id) {
    return faqsDataStore.find(u => u.id === id);
  }
}

module.exports = faqRepository;
