const commonJestOptions = require('../common/common-jest-options');

module.exports = {
  ...commonJestOptions,
  setupFilesAfterEnv: ["./jest.setup-file.ts"],
  testEnvironment: "node",
  transform: {
    "\\.ts$": 'ts-jest',
  },
  globals: {
    'ts-jest': {
        isolatedModules: true
    }
  },
};
