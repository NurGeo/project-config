const jestAllConfig = require('../common/jest.all-config');
const backendJestOptions = require('./backend-jest-options');

module.exports = {
  ...jestAllConfig,
  ...backendJestOptions,
};
