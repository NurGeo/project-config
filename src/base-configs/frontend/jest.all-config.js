const frontendJestOptions = require('./frontend-jest-options');
const jestAllConfig = require('../common/jest.all-config');

module.exports = {
  ...frontendJestOptions,
  ...jestAllConfig,
};
