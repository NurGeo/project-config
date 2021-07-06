const frontendJestOptions = require('./frontend-jest-options');
const jestIntConfig = require('../common/jest.int-config');

module.exports = {
  ...frontendJestOptions,
  ...jestIntConfig,
};
