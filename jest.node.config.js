/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    'src/server/**/*.js',
    '!src/server/**/*.spec.js',
    '!src/server/**/*.test.js'
  ],
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/server/tests/*.spec.js'
  ],
};

module.exports = config;
