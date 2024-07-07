const usersStore = require('./users.json');
// let users = require('./users.db');
const database = {
  // users: {
  //   get() {
  //     return users;
  //   },
  //   create(user) {
  //     users.push(user);
  //   },
  //   update(user) {
  //     const userIndex = users.findIndex(u => u.id === user.id);
  //     users[userIndex] = { ...user };
  //   }
  // },
  usersData: {
    get() {
      return usersStore;
    },
  }
}
module.exports = database;
