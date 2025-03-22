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
});
