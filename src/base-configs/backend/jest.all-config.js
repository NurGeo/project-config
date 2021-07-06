const backendJestOptions = require('./backend-jest-options');
const jestAllConfig = require('../common/jest.all-config');

module.exports = {
  ...backendJestOptions,
  ...jestAllConfig,
};
