const backendJestOptions = require('./backend-jest-options');
const jestCompConfig = require('../common/jest.comp-config');

module.exports = {
  ...backendJestOptions,
  ...jestCompConfig,
  globalSetup: "./jest.global-setup.js",
  globalTeardown: "./jest.global-teardown.js",
  slowTestThreshold: 20,
};
