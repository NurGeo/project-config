module.exports = {
  extends: ['../common/.eslintrc.js'],
  plugins: [
    'jest',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
    'jest/globals': true,
  },
};
