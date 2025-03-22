const express = require('express');
const http = require('http');
const request = require('supertest');
const UserController = require('../../controllers/users.controller');
const userService = require('../../services/users.service');

jest.mock('../../services/users.service');

describe('UserController', () => {
  let app;
  let server;

  beforeAll((done) => {
    app = express();

    app.get('/users', UserController.get);
    app.get('/users/:id', UserController.getById);

    server = http.createServer(app);
    server.listen(0, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should send a success response for get', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }];
    userService.get.mockReturnValue(mockUsers);

    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: mockUsers,
    });
  });


  it('should send a success response for getOne', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    userService.getById.mockReturnValue(mockUser);

    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: mockUser
    });
  });

  it('should send an error response for getOne when user not found', async () => {
    userService.getById.mockReturnValue(undefined);
    const response = await request(app).get('/users/999');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      data: undefined,
    });
  });
});
