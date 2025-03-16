const faqsService = require('../../services/faqs.service');

jest.mock('../../db/faqs.json', () => [
  {
    q: 'What is this?',
    a: 'This is a FAQ.'
  },
  {
    q: 'How does it work?',
    a: 'It works like magic.'
  }
]);

describe('FaqsService', () => {
  describe('get', () => {
    it('should return all faqs', () => {
      const expectedFaqs = [
        { id: 0, question: 'What is this?', answer: 'This is a FAQ.' },
        { id: 1, question: 'How does it work?', answer: 'It works like magic.' }
      ];
      const faqs = faqsService.get();
      expect(faqs).toEqual(expectedFaqs);
    });
  });
});
