const commonJestOptions = require('./common-jest-options');

module.exports = {
  ...commonJestOptions,
  testRegex: ['.*\\.e2e-test\\.ts$'],
};
