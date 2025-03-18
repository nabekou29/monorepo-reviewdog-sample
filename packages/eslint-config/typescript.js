import baseConfig from './base.js';
import tseslint from 'typescript-eslint';

export default [
  ...baseConfig,
  ...tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.recommended, tseslint.configs.recommendedTypeChecked],
  }),
];
