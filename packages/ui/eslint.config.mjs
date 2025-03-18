import config from '@monorepo/eslint-config';

export default [
  ...config.base,
  ...config.typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
