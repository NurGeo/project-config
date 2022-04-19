const backendJestOptions = require('./backend-jest-options');
const jestCompConfig = require('../common/jest.comp-config');

module.exports = {
  ...backendJestOptions,
  ...jestCompConfig,
  globalSetup: "./jest.global-setup.ts",
  globalTeardown: "./jest.global-teardown.ts",
  slowTestThreshold: 20,
};
