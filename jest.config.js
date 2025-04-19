/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: 'jest-preset-angular',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/test.ts',
    '!src/environments/**',
    '!src/main.ts',
    '!src/**/*.module.ts'
  ],
  coverageDirectory: 'coverage/jest',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/*', '<rootDir>/server/*'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  snapshotSerializers: ['jest-preset-angular/build/serializers/ng-snapshot'],
};

module.exports = config;
