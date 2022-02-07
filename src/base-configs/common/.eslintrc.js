module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'namespace-fixtures',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  ignorePatterns: ['.eslintrc.ts', '*.js', 'dist/*'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'no-useless-constructor': 'off',
    'global-require': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-sequences': 'off',
    'no-async-promise-executor': 'off',
    'prefer-const': 'warn',
    'no-unused-expressions': 'off',
    'func-names': 'off',
    'no-restricted-globals': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-console': [process.env.NODE_ENV === 'development' ? 'off' : 'error'],
    'no-alert': [process.env.NODE_ENV === 'development' ? 'off' : 'error'],

    // typescript
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',

    // custom
    'namespace-fixtures/namespace-fixture-name-rule': 'warn',
    'namespace-fixtures/import-namespace-fixture-rule': 'warn',
  },
};
