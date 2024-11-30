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
  filterByQuestion(question) {
    return faqsDataStore
      .filter(faq => faq.q.toLowerCase().includes(question.toLowerCase()))
      .map((faq, index) => ({
        id: index,
        question: faq.q,
        answer: faq.a
      }));
  }
}

module.exports = faqRepository;
