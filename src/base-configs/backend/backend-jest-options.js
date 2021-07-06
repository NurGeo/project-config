const commonJestOptions = require('../common/common-jest-options');

module.exports = {
  ...commonJestOptions,
  setupFiles: ["./jest.setup-file.js"],
  testEnvironment: "node",
};
