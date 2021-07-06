const backendJestOptions = require('./backend-jest-options');
const jestE2eConfig = require('../common/jest.e2e-config');

module.exports = {
  ...backendJestOptions,
  ...jestE2eConfig,
};
