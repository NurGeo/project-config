const frontendJestOptions = require('./frontend-jest-options');
const jestE2eConfig = require('../common/jest.e2e-config');

module.exports = {
  ...frontendJestOptions,
  ...jestE2eConfig,
};
