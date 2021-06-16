module.exports = {
  coverageProvider: 'v8',
  coverageDirectory: "coverage",
  rootDir: "src",
  transformIgnorePatterns: [
    "node_modules/(?!(@buildozer)/)",
  ],
};
