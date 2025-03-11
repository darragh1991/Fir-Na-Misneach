const express = require('express');
const http = require('http');
const request = require('supertest');
const ResponseHandler = require('../handlers/response.handler');

describe('Response Handlers', () => {
  let app;
  let server;

  beforeAll((done) => {
    app = express();

    app.get('/success', (req, res) => {
      ResponseHandler.sendSuccessResponse(res, { data: { key: 'value' }, message: 'Success' });
    });

    app.get('/error', (req, res) => {
      ResponseHandler.sendErrorResponse(res, { data: { error: 'details' }, message: 'Error occurred', status: 500 });
    });

    app.get('/bad-request', (req, res) => {
      ResponseHandler.sendBadRequestResponse(res, ['param1', 'param2']);
    });

    server = http.createServer(app);
    server.listen(0, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should send a success response', async () => {
    const response = await request(app).get('/success');
    console.log('Success Response:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: { data: { key: 'value' }, message: 'Success' },
    });
  });

  it('should send an error response', async () => {
    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Error occurred',
      data: { error: 'details' }
    });
  });

  it('should send a bad request response', async () => {
    const response = await request(app).get('/bad-request');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Parameters param1 and param2 are required',
      missing_params: ['param1', 'param2']
    });
  });
});
