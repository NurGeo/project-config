const backendJestOptions = require('./backend-jest-options');
const jestAllConfig = require('../common/jest.all-config');

module.exports = {
  ...backendJestOptions,
  ...jestAllConfig,
  globalSetup: "./jest.global-setup.ts",
  globalTeardown: "./jest.global-teardown.ts",
  slowTestThreshold: 20,
};
