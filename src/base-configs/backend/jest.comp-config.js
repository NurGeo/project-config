const jestCompConfig = require('../common/jest.comp-config');
const backendJestOptions = require('./backend-jest-options');

module.exports = {
  ...jestCompConfig,
  ...backendJestOptions,
};
