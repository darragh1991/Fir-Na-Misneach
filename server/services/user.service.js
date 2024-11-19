const usersStore = require('../db/users.json');

const users = {
  get() {
    return usersStore;
  },
  create(user) {
    usersStore.push(user);
  },
  update(user) {
    const userIndex = usersStore.findIndex(u => u.id === user.id);
    usersStore[userIndex] = { ...user };
  },
  getById(id) {
    return usersStore.find(u => u.id === id);
  }
}

module.exports = users;
