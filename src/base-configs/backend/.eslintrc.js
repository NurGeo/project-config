module.exports = {
  extends: ['../common/.eslintrc.js'],
  plugins: [
    'jest',
    '@typescript-eslint/eslint-plugin',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
    'jest/globals': true,
  },
};
