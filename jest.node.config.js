/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "server/**/*.js",
    "!server/tests/**",
    "!server/db/**"
  ],
  coverageDirectory: "coverage/jest-node",
  coverageReporters: ["json", "lcov", "text", "clover"],
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/server/tests/**/*.spec.js'
  ],
};

module.exports = config;
