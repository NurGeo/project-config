const jestE2eConfig = require('../common/jest.e2e-config');
const frontendJestOptions = require('./frontend-jest-options');

module.exports = {
  ...jestE2eConfig,
  ...frontendJestOptions,
};
