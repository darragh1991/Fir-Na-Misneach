process.env.NODE_ENV = 'test';

const request = require('supertest');
const { server, startServer } = require('../index');

describe('API Endpoints', () => {
  let mockServer;

  beforeAll(async () => {
    mockServer = await startServer(server, 0);
  });

  afterAll((done) => {
    (mockServer) ? mockServer.close(done) : done();
  });

  it('GET /users returns 200', async () => {
    const response = await request(server).get('/users');
    expect(response.ok).toBeTruthy();
  });
});
