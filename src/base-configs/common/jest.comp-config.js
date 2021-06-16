const commonJestOptions = require('./common-jest-options');

module.exports = {
  ...commonJestOptions,
  testRegex: ['.*\\.c-test\\.ts$'],
};
