const contractsJestOptions = require('./contracts-jest-options');
const jestCompConfig = require('../common/jest.comp-config');

module.exports = {
  ...contractsJestOptions,
  ...jestCompConfig,
  slowTestThreshold: 20,
};
