import typescriptConfig from './typescript.js';
import reactConfig from './react.js';
import next from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['**/.next/**', '**/public/**'],
  },
  ...typescriptConfig,
  ...reactConfig,
  {
    plugins: {
      ...reactConfig.plugins,
      '@next/next': next,
    },
    // Next.jsの設定を追加
    rules: {
      ...reactConfig.rules,
      // Next.js特有のルール
      ...next.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'warn',
    },
  },
];
