const jestIntConfig = require('../common/jest.int-config');
const backendJestOptions = require('./backend-jest-options');

module.exports = {
  ...jestIntConfig,
  ...backendJestOptions,
};
