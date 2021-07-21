module.exports = {
  env: {
    es6: true,
    jasmine: true,
  },
  overrides: [
    {
      extends: [
        '../common/.eslintrc.js',
      ],
      files: [
        '*.js',
      ],
      parserOptions: {
        project: [
          './tsconfig.build.json',
          './tsconfig.spec.json',
        ],
        createDefaultProgram: true,
      },
    },
    {
      extends: [
        '../common/.eslintrc.js',
      ],
      files: [
        '*.ts',
      ],
      parserOptions: {
        project: [
          './tsconfig.build.json',
          './tsconfig.spec.json',
        ],
        createDefaultProgram: true,
      },
    },
    {
      extends: [
        '../common/.eslintrc.js',
      ],
      files: [
        '*.component.ts',
      ],
      parserOptions: {
        project: [
          './tsconfig.build.json',
          './tsconfig.spec.json',
        ],
        createDefaultProgram: true,
      },
      rules: {},
    },
    {
      files: [
        '*.component.html',
      ],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/conditional-complexity': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        'strict': 'off',
        'import/first': 'off',
        'lines-around-directive': 'off',
      },
    },
  ],
};
