import config from '@monorepo/eslint-config';

export default [
  ...config.next,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
