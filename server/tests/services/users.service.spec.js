const usersService = require('../../services/users.service');

jest.mock('../../db/users.json', () => [
  {
    id: 0,
    name: 'John Doe',
    email: 'johndoe@email.com'
  },
  {
    id: 1,
    name: 'Jane Doe',
    email: 'janedoe@email.com'
  }
]);

describe('UsersService', () => {
  describe('get', () => {
    it('should return all users', () => {
      const expectedUsers = [
        { id: 0, name: 'John Doe', email: 'johndoe@email.com' },
        { id: 1, name: 'Jane Doe', email: 'janedoe@email.com' }
      ];
      const users = usersService.get();
      expect(users).toEqual(expectedUsers);
    });
  });
  describe('getById', () => {

    it('should return a user by id', () => {
      const expectedUser = { id: 0, name: 'John Doe', email: 'johndoe@email.com' };
      const user = usersService.getById(0);
      expect(user).toEqual(expectedUser);
    });

    it('should return undefined when user not found', () => {
      const user = usersService.getById(999);
      expect(user).toBeUndefined();
    });
  });
});
