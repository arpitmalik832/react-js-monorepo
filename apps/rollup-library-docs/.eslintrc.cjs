// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'react-app',
  ],
  plugins: [
    'css-modules',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],
  rules: {
    // rules regarding react plugin
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    // rules regarding react-hooks plugin
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    // rules regarding css-modules plugin
    'css-modules/no-unused-class': [2, { camelCase: true }],
    'css-modules/no-undef-class': [2, { camelCase: true }],
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [2, { packageDir: '.' }],
    'import/prefer-default-export': 0,
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      1,
      {
        endOfLine: 'lf',
      },
    ],
    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 2,
    // rules regarding no-console
    'no-console': 2,
    'no-debugger': 2,
    'no-unused-vars': 2,
    'prefer-destructuring': 2,
    'func-names': 2,
    camelcase: 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@theme', '../../node_modules/@docusaurus/theme-classic/lib/theme'],
        ],
        extensions: ['.js', '.jsx', '.mdx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      extends: ['plugin:mdx/recommended'],
      plugins: ['mdx'],
      rules: {
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', '.jsx', '.mdx'] },
        ],
      },
    },
  ],
};
