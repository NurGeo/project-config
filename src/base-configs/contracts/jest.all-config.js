const contractsJestOptions = require('./contracts-jest-options');
const jestAllConfig = require('../common/jest.all-config');

module.exports = {
  ...contractsJestOptions,
  ...jestAllConfig,
  slowTestThreshold: 20,
};
