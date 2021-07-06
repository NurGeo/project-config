const frontendJestOptions = require('./frontend-jest-options');
const jestUnitConfig = require('../common/jest.unit-config');

module.exports = {
  ...frontendJestOptions,
  ...jestUnitConfig,
};
