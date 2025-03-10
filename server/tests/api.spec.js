const request = require('supertest');
const server = require('../index');

describe('API Endpoints', () => {

  afterAll((done) => {
    server.close(done);
  });

  it('GET /api/status returns 200', async () => {
    const response = await request(server).get('/users')
    expect(response.ok).toBeTruthy();

  });
});
