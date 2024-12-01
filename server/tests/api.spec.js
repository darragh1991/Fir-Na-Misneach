const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  test('GET /api/status returns 200', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.ok).toBeTruthy();
  });
});
