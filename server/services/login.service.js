const usersService = require('./users.service');

const determineLogin = (email, password) => {
  const user = usersService.getByEmail(email);

  if (!user) {
    return {
      success: false,
      error: {
        type: 'USER_NOT_FOUND',
        message: 'No user found with this email'
      }
    };
  }

  if (user.password !== password) {
    return {
      success: false,
      error: {
        type: 'INVALID_PASSWORD',
        message: 'Incorrect password'
      }
    };
  }

  const { password: _, ...userWithoutPassword } = user;

  return {
    success: true,
    user: userWithoutPassword,
  };
};

module.exports = { determineLogin };