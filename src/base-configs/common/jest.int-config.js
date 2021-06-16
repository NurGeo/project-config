const commonJestOptions = require('./common-jest-options');

module.exports = {
  ...commonJestOptions,
  testRegex: ['.*\\.i-test\\.ts$'],
};
