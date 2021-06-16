const commonJestOptions = require('./common-jest-options');

module.exports = {
  ...commonJestOptions,
  testRegex: ['.*\\.((i|comp|e2e)-)?test\\.ts$'],
};
