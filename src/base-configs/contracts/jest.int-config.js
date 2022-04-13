const contractsJestOptions = require('./contracts-jest-options');
const jestIntConfig = require('../common/jest.int-config');

module.exports = {
  ...contractsJestOptions,
  ...jestIntConfig,
  slowTestThreshold: 20,
};
