import prettierConfig from 'eslint-config-prettier';

export default [
  prettierConfig,
  {
    name: 'base',
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // 基本的なルール
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
