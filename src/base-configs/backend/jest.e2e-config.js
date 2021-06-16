const jestE2eConfig = require('../common/jest.e2e-config');
const backendJestOptions = require('./backend-jest-options');

module.exports = {
  ...jestE2eConfig,
  ...backendJestOptions,
};
