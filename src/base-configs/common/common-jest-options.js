module.exports = {
  coverageProvider: 'v8',
  coverageDirectory: "coverage",
  rootDir: "src",
  moduleDirectories: ['node_modules', '../'],
  transformIgnorePatterns: [
    "node_modules/(?!(@buildozer)/)",
  ],
};
