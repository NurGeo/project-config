const backendJestOptions = require('./backend-jest-options');
const jestIntConfig = require('../common/jest.int-config');

module.exports = {
  ...backendJestOptions,
  ...jestIntConfig,
  globalSetup: "./jest.global-setup.js",
  globalTeardown: "./jest.global-teardown.js",
};
