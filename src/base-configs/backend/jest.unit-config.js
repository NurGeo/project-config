const backendJestOptions = require('./backend-jest-options');
const jestUnitConfig = require('../common/jest.unit-config');

module.exports = {
  ...backendJestOptions,
  ...jestUnitConfig,
  transform: {
    "\\.ts$": 'babel-jest',
  },
};
