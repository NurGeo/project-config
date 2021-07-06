const backendJestOptions = require('./backend-jest-options');
const jestCompConfig = require('../common/jest.comp-config');

module.exports = {
  ...backendJestOptions,
  ...jestCompConfig,
};
