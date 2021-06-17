const jestIntConfig = require('../common/jest.int-config');
const frontendJestOptions = require('./frontend-jest-options');

module.exports = {
  ...jestIntConfig,
  ...frontendJestOptions,
};
