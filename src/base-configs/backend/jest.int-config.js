const backendJestOptions = require('./backend-jest-options');
const jestIntConfig = require('../common/jest.int-config');

module.exports = {
  ...backendJestOptions,
  ...jestIntConfig,
};
