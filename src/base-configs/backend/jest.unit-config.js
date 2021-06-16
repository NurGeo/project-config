const jestUnitConfig = require('../common/jest.unit-config');
const backendJestOptions = require('./backend-jest-options');

module.exports = {
  ...jestUnitConfig,
  ...backendJestOptions,
};
