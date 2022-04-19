const commonJestOptions = require('../common/common-jest-options');

module.exports = {
  ...commonJestOptions,
  setupFilesAfterEnv: ["./jest.setup-file.ts"],
  testEnvironment: "node",
  transform: {
    "\\.[t]s?$": 'ts-jest',
  },
};
