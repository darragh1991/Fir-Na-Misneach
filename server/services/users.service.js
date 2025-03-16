const usersStore = require('../db/users.json');

const users = {
  get() {
    return usersStore;
  },
  getById(id) {
    console.log('ID:', id);
    return usersStore.find(u => u.id === id);
  }
}

module.exports = users;
