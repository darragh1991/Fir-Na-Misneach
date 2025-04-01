const express = require('express');
const http = require('http');
const request = require('supertest');
const ResponseHandler = require('../../handlers/response.handler');

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

    server = http.createServer(app);
    server.listen(0, done); // set server to listen on a random port
  });

  afterAll((done) => {
    server.close(done); // close the server
  });

  it('should send a success response', async () => {
    //WHEN
    const response = await request(app).get('/success');
    //THEN
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: { data: { key: 'value' }, message: 'Success' },
    });
  });

  it('should send an error response', async () => {
    //WHEN
    const response = await request(app).get('/error');
    //THEN
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: 'Error occurred',
      data: { error: 'details' }
    });
  });
});
