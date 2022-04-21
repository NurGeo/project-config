const contractsJestOptions = require('./contracts-jest-options');
const jestUnitConfig = require('../common/jest.unit-config');

module.exports = {
  ...contractsJestOptions,
  ...jestUnitConfig,
};
