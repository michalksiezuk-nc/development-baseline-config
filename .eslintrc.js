module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json',
    'tsconfigRootDir': '.'
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  'extends': [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'max-len': [
      'error',
      120,
      2,
      {
        'ignoreUrls': true,
        'ignoreComments': false,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],
    'no-restricted-syntax': [
      'error',
      'WithStatement'
    ],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-continue': 'off',
    'no-param-reassign': [
      'error',
      {
        'props': false
      }
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'consistent': true
        },
        'ObjectPattern': {
          'consistent': true
        },
        'ImportDeclaration': {
          'consistent': true
        },
        'ExportDeclaration': {
          'consistent': true
        }
      }
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        'before': false,
        'after': false,
        'overrides': {
          'arrow': {
            'before': true,
            'after': true
          }
        }
      }
    ]
  }
};