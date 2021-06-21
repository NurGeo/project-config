const jestUnitConfig = require('../common/jest.unit-config');
const frontendJestOptions = require('./frontend-jest-options');

module.exports = {
  ...jestUnitConfig,
  ...frontendJestOptions,
};
