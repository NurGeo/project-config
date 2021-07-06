const frontendJestOptions = require('./frontend-jest-options');
const jestCompConfig = require('../common/jest.comp-config');

module.exports = {
  ...frontendJestOptions,
  ...jestCompConfig,
};
