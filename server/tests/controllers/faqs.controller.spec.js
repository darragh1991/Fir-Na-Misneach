const express = require('express');
const http = require('http');
const request = require('supertest');
const FaqController = require('../../controllers/faqs.controller');
const faqsService = require('../../services/faqs.service');

jest.mock('../../services/faqs.service');

describe('FaqController', () => {
  let app;
  let server;

  beforeAll((done) => {
    app = express();

    app.get('/faqs', FaqController.get);

    server = http.createServer(app);
    server.listen(0, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should send a success response for get', async () => {
    const mockFaqs = [{ id: 1, question: 'What is this?', answer: 'This is a FAQ.' }];
    faqsService.get.mockReturnValue(mockFaqs);
    const response = await request(app).get('/faqs')
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: mockFaqs
      });
  });

  // it('should send a success response for getOne', async () => {
  //   const mockFaq = { id: 1, question: 'What is this?', answer: 'This is a FAQ.' };
  //   faqsService.getById.mockReturnValue(mockFaq);

  //   const response = await request(app).get('/faqs/1');
  //   expect(response.status).toBe(200);
  //   expect(response.body).toEqual({
  //     data: mockFaq
  //   });
  // });

  // it('should send an error response for getOne when FAQ not found', async () => {
  //   faqsService.getById.mockReturnValue(undefined);

  //   const response = await request(app).get('/faqs/999');
  //   expect(response.status).toBe(404);
  //   expect(response.body).toEqual({
  //     message: 'No faq found',
  //     data: undefined
  //   });
  // });
});
