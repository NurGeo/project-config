const jestCompConfig = require('../common/jest.comp-config');
const frontendJestOptions = require('./frontend-jest-options');

module.exports = {
  ...jestCompConfig,
  ...frontendJestOptions,
};
