module.exports = {
  env: {
    es6: true,
    jasmine: true,
  },
  overrides: [
    {
      extends: [
        './node_modules/@rilata/project-configs/src/base-configs/frontend/.eslintrc.js',
      ],
      files: [
        '*.js',
      ],
      parserOptions: {
        project: [
          './tsconfig.json',
        ],
        createDefaultProgram: true,
      },
    },
    {
      extends: [
        './node_modules/@rilata/project-configs/src/base-configs/frontend/.eslintrc.js',
      ],
      files: [
        '*.ts',
      ],
      parserOptions: {
        project: [
          './tsconfig.json',
        ],
        createDefaultProgram: true,
      },
    }
  ],
};
