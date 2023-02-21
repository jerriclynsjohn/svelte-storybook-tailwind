module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:json/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  plugins: ['svelte3', 'html'],
  ignorePatterns: ['*.cjs'],
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    'json/*': ['error', 'allowComments']
  }
};