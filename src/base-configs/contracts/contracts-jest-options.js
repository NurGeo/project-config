const commonJestOptions = require('../common/common-jest-options');

module.exports = {
  ...commonJestOptions,
  setupFilesAfterEnv: ["./jest.setup-file.js"],
  testEnvironment: "node",
};
