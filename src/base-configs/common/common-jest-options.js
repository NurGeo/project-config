module.exports = {
  coverageProvider: 'v8',
  coverageDirectory: "coverage",
  rootDir: ".",
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [
    "node_modules/(?!(@rilata)/)",
  ],
};
