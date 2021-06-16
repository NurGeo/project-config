const commonJestOptions = require('./common-jest-options');

module.exports = {
  ...commonJestOptions,
  testRegex: ['.*\\.test\\.ts$'],
};
