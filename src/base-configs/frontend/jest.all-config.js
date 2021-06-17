const jestAllConfig = require('../common/jest.all-config');
const frontendJestOptions = require('./frontend-jest-options');

module.exports = {
  ...jestAllConfig,
  ...frontendJestOptions,
};
