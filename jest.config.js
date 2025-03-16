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
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.spec.ts",
    "!src/main.ts",
    "!src/environments/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  modulePathIgnorePatterns: ['<rootDir>/cypress/*', '<rootDir>/server/*'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  snapshotSerializers: ['jest-preset-angular/build/serializers/ng-snapshot'],
};

module.exports = config;
