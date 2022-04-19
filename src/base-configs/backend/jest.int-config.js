const backendJestOptions = require('./backend-jest-options');
const jestIntConfig = require('../common/jest.int-config');

module.exports = {
  ...backendJestOptions,
  ...jestIntConfig,
  globalSetup: "./jest.global-setup.ts",
  globalTeardown: "./jest.global-teardown.ts",
  slowTestThreshold: 20,
};
