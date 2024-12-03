/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: 'jest-preset-angular',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'jest-preset-angular',
  modulePathIgnorePatterns: ['<rootDir>/cypress/*', '<rootDir>/server/*'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  snapshotSerializers: ['jest-preset-angular/build/serializers/ng-snapshot'],
};

module.exports = config;
