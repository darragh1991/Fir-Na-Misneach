const usersStore = require('../db/users.json');

const users = {
  get: () => usersStore,
  getById: (id) => usersStore.find(u => u.id === id),
  getByEmail: (email) => usersStore.find(u => u.email === email)
}

module.exports = users;
