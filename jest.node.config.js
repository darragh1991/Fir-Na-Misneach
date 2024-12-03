module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/server/tests'],
  testMatch: ['**/*.spec.js', '**/*.test.js'],
  moduleFileExtensions: ['js', 'json'],
  coverageDirectory: 'coverage/node',
  collectCoverageFrom: [
    'src/server/**/*.js',
    '!src/server/**/*.spec.js',
    '!src/server/**/*.test.js'
  ]
};
