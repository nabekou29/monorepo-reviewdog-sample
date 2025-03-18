import { fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  react.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'react',
    plugins: { 'react-hooks': fixupPluginRules(reactHooks) },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // 追加のルール
      'react/react-in-jsx-scope': 'off',
    },
  },
];
